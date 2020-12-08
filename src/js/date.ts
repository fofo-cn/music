import dateformat from "dateformat";

enum DateFormate {
  "f0" = "MM:ss",
  "f1" = "yyyy/mm",
  "f2" = "yyyy/mm/dd",
  "f3" = "yyyy/mm/dd HH:MM",
  "f4" = "yyyy/mm/dd HH:MM:ss",
  "f5" = "mm/dd HH:MM",
  "f6" = "HH:MM:ss",
  "f7" = "HH点MM分ss秒 l毫秒",
  "f8" = "yyyymmddHHMMssl",
  "f9" = "yyyymm"
}
const DAY_1 = 24 * 3600 * 1000;
const DAY_30 = DAY_1 * 30;
const now = new Date();
const timestamp = now.getTime();
const DayOfWeek = now.getDay();
const month = now.getMonth();

export const date = (date: Date | string | number, type = 2): string => {
  /**
   * @date 需要处理的时间
   * @type 处理方式，参考上方的 @DateFormate 默认是2
   */
  const _date = typeof date === "number" ? new Date(date) : date;
  if (!date) {
    return "无";
  }
  const key = `f${type}`;
  return dateformat(_date, DateFormate[key]);
};

export const $前天 = date(timestamp - DAY_1 * 2);
export const $昨天 = date(timestamp - DAY_1);
export const $今天 = date(now);
export const $明天 = date(timestamp + DAY_1);
export const $后天 = date(timestamp + DAY_1 * 2);
export const $本月1号 = date(now, 1) + "/01";
export const $上月1号 = now.getFullYear() + "/" + now.getMonth() + "/01";
export const $上上月1号 = now.getFullYear() + "/" + (month - 1) + "/01";
export const $本周一 = date(timestamp - (DayOfWeek - 1) * DAY_1);
export const $本周日 = date(timestamp - (DayOfWeek - 7) * DAY_1);
export const $上周一 = date(timestamp - (DayOfWeek + 6) * DAY_1);
export const $上周日 = date(timestamp - (DayOfWeek - 0) * DAY_1);
export const $30天前 = date(timestamp - DAY_30);
export const $30天后 = date(timestamp + DAY_30);
export const $本月 = date(now, 1);

export const isExpired = (date: string | Date) => {
  /**
   * 检测时间是否超过现在
   * @date 需要检测的时间
   */
  if (typeof date === "string") {
    date = new Date(date);
  }
  const current = new Date();
  return current.getTime() - date.getTime() > 0;
};

export const enumerateTime = (
  time1: string | Date,
  time2: string | Date
): string[] | false => {
  /**
   * 批量生成日期数组
   * @time1 起始时间
   * @time2 结束时间
   */
  const t = (t: string | Date): number =>
    typeof t === "string" ? new Date(t).getTime() : t.getTime();
  const _time1 = t(time1);
  const _time2 = t(time2);
  if (_time1 > _time2) {
    return false;
  }
  let len = (_time2 - _time1) / DAY_1 + 1;
  const tar = [];
  while (len--) {
    tar.push(date(_time2 - DAY_1 * len));
  }
  return tar;
};
