const moment = require('moment');

function status(batasTelat, batasAlpha) {
  let jam = moment(new Date()).format("hh:mm A")
  let status = "";

  if(jam >= batasAlpha){
    status = "Alpha";
  } else if (jam >= batasTelat) {
    status = "Telat";
  } else {
    status = "Hadir";
  }

  return status;
}

module.exports = status;
