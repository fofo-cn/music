import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { vueInit } from "@/js/init";

Vue.config.productionTip = false;
declare module "vue/types/vue" {
  interface Vue {
    $今天: string;
    $昨天: string;
    $明天: string;
    $本月1号: string;
    $30天前: string;
    $30天后: string;
    $后天: string;
    $前天: string;
    $上月1号: string;
    $上上月1号: string;
    $上周一: string;
    $上周日: string;
    $本周一: string;
    $本周日: string;
    $本月: string;
    $dateformat: (date: Date | string, type: number) => string;
  }
}
vueInit(Vue);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
