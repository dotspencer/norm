var keys = require('../config/keys.json');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.gmail.username,
        pass: keys.gmail.password
    }
});

function sendVerification(db, email){

  var sql = "SELECT * FROM Users WHERE email = ?;";
  db.query(sql, [email], function(err, results, fields){
    if (error) {
      return console.log(error);
    }
    if(results.length == 0){
      return console.log("## No user with that email address found ##")
    }

    var user = results[0];
    var verifyLink = "http://effortlessreviews.com/verify/" + user.token;
    var body = "<h3>Review Norm</h3>" +
               "<p>Click the link below to verify your new account</p>" +
               "<p><a href='" + verifyLink + "'>verifyLink</a></p>";

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Review Norm" <reviewnorm@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'Verify Review Norm Account', // Subject line
      // text: 'Hello user, this is a test.', // plain text body
      html: body // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      transporter.close();
    });

  });
}



module.exports = {
  sendVerification: sendVerification
}
