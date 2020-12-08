import {
  $前天,
  $30天前,
  $本月1号,
  $今天,
  $明天,
  $昨天,
  $上周一,
  $上周日,
  $上月1号,
  $上上月1号,
  $本周一,
  $本周日,
  $30天后,
  $本月,
  date,
  $后天
} from "../js/date";
import { VueConstructor } from "vue/types/umd";
import { Button, Input, Notification } from "element-ui";

export const prototypeInit = (vm: VueConstructor<Vue>) => {
  vm.prototype.$dateformat = date;
  vm.prototype.$今天 = $今天;
  vm.prototype.$后天 = $后天;
  vm.prototype.$昨天 = $昨天;
  vm.prototype.$明天 = $明天;
  vm.prototype.$前天 = $前天;
  vm.prototype.$本月1号 = $本月1号;
  vm.prototype.$30天前 = $30天前;
  vm.prototype.$上月1号 = $上月1号;
  vm.prototype.$上上月1号 = $上上月1号;
  vm.prototype.$上周一 = $上周一;
  vm.prototype.$上周日 = $上周日;
  vm.prototype.$本周一 = $本周一;
  vm.prototype.$本周日 = $本周日;
  vm.prototype.$30天后 = $30天后;
  vm.prototype.$本月 = $本月;

  vm.use(Input).use(Button);
};
