const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/public'));

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'finalprojecthacktiv8@gmail.com',
    pass: 'projecthacktiv8'
  }
});


function mail(info) {
  if (info === "late") {
    var mailOptions = {
      from: 'finalprojecthacktiv8@gmail.com',
      to: 'terrathe2@gmail.com',
      subject: 'Late Notification',
      html:
      '<h2>You already late 3 times, please..</h2>' +
      '<p><img src="cid:dontlate@unique.com" width="300px" /></p>',
      attachments: [
            // File Stream attachment
            {
              filename: 'dontlate.jpg',
              path: 'public/Images/dontlate.jpg',
              cid: 'dontlate@unique.com'
            }
          ]
    };
  } else if (info === "alpha") {
    var mailOptions = {
      from: 'finalprojecthacktiv8@gmail.com',
      to: 'terrathe2@gmail.com',
      subject: 'Alpha Notification',
      html:
      '<h2>You already alpha 3 times, please..</h2>'+
      '<p><img src="cid:absent@unique.com" width="300px" /></p>',
      attachments: [
            // File Stream attachment
            {
              filename: 'absent.jpg',
              path: 'public/Images/absent.jpg',
              cid: 'absent@unique.com'
            }
          ]
    };
  }

  return mailOptions;
}

let status = "alpha";

transporter.sendMail(mail(status), function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
