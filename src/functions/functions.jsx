export const minutesToHms = (minues) => {
    var Inseconds = minues * 60;
    var sec_num = parseInt(Inseconds);
    var h = Math.floor(sec_num / 3600);
    var m = Math.floor((sec_num - h * 3600) / 60);
    var s = sec_num - h * 3600 - m * 60;
  
    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  
    return hDisplay + mDisplay + sDisplay;
  };
  