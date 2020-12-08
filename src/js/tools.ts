export const isType = (target: any, type: string): boolean => {
  return typeof target === type;
};
export const addPx = (target: string | number): string =>
  isType(target, "number") ? (target += "px") : target.toString();

export const deepCopy = (e: any) => JSON.parse(JSON.stringify(e));

export const eqObj = (obj1: any, obj2: any) => {
  JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const isUndef = (v: any): boolean => {
  return v === undefined || v === null;
};

export const isEmptyObj = (obj: any) => {
  return isUndef(obj) || Object.keys(obj).length === 0;
};

let timeout: number | null = null;
export const debounce = (fn: CallableFunction, wait: number) => {
  if (timeout !== null) clearTimeout(timeout);
  timeout = setTimeout(fn, wait);
};

export const checkObj = (
  Obj: Record<string, any>,
  key: string,
  defalut?: any
) => {
  const check = Object.prototype.hasOwnProperty.call(Obj, key);
  if (!check) {
    Object.defineProperty(Obj, key, { value: defalut, writable: true });
  }
};
export type Obj<T = string> = { [key: string]: T };
export const recursionConvert = (data: Obj<any>[], top = 0) => {
  data.forEach(item => {
    const p = data.find(_item => _item.id === item.pid);
    if (p) {
      if (!p.children) {
        p.children = [];
      }
      p.children.push(item);
    }
  });
  return data.filter(item => item.pid === top);
};

export const copyBoard = (value: string) => {
  let input: HTMLInputElement | null = document.createElement("input");
  input.value = value;
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
  input = null;
  return value;
};

export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";

export const defalutTrue = (v?: boolean) => (v === undefined ? true : v);

export const strSplice = (pre: string, types: string[]) => {
  return types.map(t => pre + "-" + t);
};

export const decimalCount = (num: number) => {
  const l = (num + "").split(".");
  return l.length > 1 ? l[1].length : 0;
};

export const AddFloat = (args: number[]) => {
  const lenArr = Array(args.length + 1).fill(0);
  args.forEach((num, index) => {
    lenArr[index] = decimalCount(num);
  });
  const m = Math.pow(
    10,
    lenArr.reduce((a, b) => (a > b ? a : b))
  );
  return args.map(num => num * m).reduce((a, b) => a + b) / m;
};
export const arrIndexUp = (arr: unknown[], index: number): void => {
  /** 数组左移 */
  if (index !== 0) {
    arr[index] = arr.splice(index - 1, 1, arr[index])[0];
  } else {
    arr.push(arr.shift());
  }
};

export const arrIndexDown = (arr: unknown[], index: number): void => {
  /** 数组右移 */
  if (index !== arr.length - 1) {
    arr[index] = arr.splice(index + 1, 1, arr[index])[0];
  } else {
    arr.unshift(arr.splice(index, 1)[0]);
  }
};
// 切割数组
export function chunkArray(array: any, size: number): any {
  //获取数组的长度，如果你传入的不是数组，那么获取到的就是undefined
  const length = array.length;
  //判断不是数组，或者size没有设置，size小于1，就返回空数组
  if (!length || !size || size < 1) {
    return [];
  }
  //核心部分
  let index = 0; //用来表示切割元素的范围start
  let resIndex = 0; //用来递增表示输出数组的下标

  //根据length和size算出输出数组的长度，并且创建它。
  const result = new Array(Math.ceil(length / size));
  //进行循环
  while (index < length) {
    //循环过程中设置result[0]和result[1]的值。该值根据array.slice切割得到。
    result[resIndex++] = array.slice(index, (index += size));
  }
  //输出新数组
  return result;
}
