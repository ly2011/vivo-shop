/**
 * 暂停
 * @param {*} ms
 */
export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// 获取当天时间
export const CurentTime = function() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours(); // 时
  var minutes = now.getMinutes(); // 分
  var clock = year + '-';
  if (month < 10) {
    clock += '0';
  }
  clock += month + '-';
  if (day < 10) {
    clock += '0';
  }
  clock += day;
  if (hour < 10) {
    hour += '0';
  }
  clock += hour + ':';
  if (minutes < 10) {
    clock += '0';
  }
  clock += minutes;
  return clock;
};
