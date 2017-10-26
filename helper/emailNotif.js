const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.static(__dirname + '/public'));

function mail(status, email) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'finalprojecthacktiv8@gmail.com',
      pass: 'projecthacktiv8'
    }
  });

  if (status === "Telat") {
    var mailOptions = {
      from: 'finalprojecthacktiv8@gmail.com',
      to: email,
      subject: 'Late Notification',
      html:
      '<h2>Tong, Bujug lu telat mulu.. telat lg gue alphain ye</h2>' +
      '<p><img src="cid:dontlate@unique.com" width="400px" /></p>',
      attachments: [
            // File Stream attachment
            {
              filename: 'dontlate.jpg',
              path: 'public/Images/dontlate.jpg',
              cid: 'dontlate@unique.com'
            }
          ]
    };
  } else if (status === "Alpha") {
    var mailOptions = {
      from: 'finalprojecthacktiv8@gmail.com',
      to: email,
      subject: 'Alpha Notification',
      html:
      '<h2>Et dah ga masuk mulu.. DO dr matkul ye.. tha tha</h2>'+
      '<p><img src="cid:absent@unique.com" width="400px" /></p>',
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

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = mail;
