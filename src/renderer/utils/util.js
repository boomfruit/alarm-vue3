//  获取星期
export const getWeekDay = () => {
  var tempDate = new Date();
  var days = tempDate.getDay();
  var week;
  switch (days) {
    case 1:
      week = "星期一";
      break;
    case 2:
      week = "星期二";
      break;
    case 3:
      week = "星期三";
      break;
    case 4:
      week = "星期四";
      break;
    case 5:
      week = "星期五";
      break;
    case 6:
      week = "星期六";
      break;
    case 0:
      week = "星期日";
      break;
  }
  return week;
};
