import axios from "axios";
import { Notification } from "element-ui";
const toastOptions = { duration: 0, closeOnClick: true };
axios.defaults.baseURL = "http://47.112.149.99:80/";
axios.defaults.headers = {
  "Content-Type": "application/json"
};
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);
let timeout: number;
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (timeout) {
      clearTimeout(timeout);
    }
    if (error.response && error.response.status === 401) {
      setTimeout(() => {
        window.localStorage.setItem(
          "jumpRoute",
          document.location.href.split("#")[1]
        );
      }, 500);
    } else if (error.response && error.response.status === 404) {
      //404，500等问题
      Notification({
        title: "警告",
        message: "请求的路径不存在",
        type: "warning"
      });
    } else if (error.response && error.response.status === 403) {
      //404，500等问题
      Notification({
        title: "警告",
        message: "您没有请求权限，请查看是否登录",
        type: "warning"
      });
    } else {
      Notification({
        title: "警告",
        message: "服务器发生了错误，请稍后重试",
        type: "warning"
      });
    }
    return;
  }
);

export function $post(url: string, data: object) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(
        res => {
          if (!res) {
            return;
          }
          if (res.data && res.data.errorcode === 1) {
            Notification({
              title: "警告",
              message: res.data.errormsg,
              type: "warning"
            });
            reject(res.data);
          } else {
            resolve(res.data);
          }
        },
        res => {
          reject(res);
        }
      )
      .catch((err: any) => {
        reject(err);
      });
  });
}

export function $get(url: string, params: object) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(
        res => {
          if (!res) {
            return;
          }
          if (res.data && res.data.errorcode === 1) {
            Notification({
              title: "警告",
              message: res.data.errormsg,
              type: "warning"
            });
            reject(res.data);
          } else {
            resolve(res.data);
          }
        },
        res => {
          reject(res);
        }
      )
      .catch((err: any) => {
        reject(err);
      });
  });
}
