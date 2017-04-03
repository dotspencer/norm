var keys = require('../config/keys.json');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.gmail.username,
        pass: keys.gmail.password
    }
});

function sendVerification(email){

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Review Norm" <reviewnorm@gmail.com>', // sender address
    to: email, // list of receivers
    subject: 'Verify Review Norm Account', // Subject line
    // text: 'Hello user, this is a test.', // plain text body
    html: '<b>Hello user, this is a test.</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    transporter.close();
  });
}



module.exports = {
  sendVerification: sendVerification
}
