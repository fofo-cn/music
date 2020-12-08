import "animate.css";
import "@/css/common.scss";
import "element-ui/lib/theme-chalk/index.css";
import { prototypeInit } from "./prototypeInit";
import { VueConstructor } from "vue/types/umd";

export const vueInit = (vm: VueConstructor<Vue>) => {
  prototypeInit(vm);
};
