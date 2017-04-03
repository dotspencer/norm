var keys = require('../config/keys.json');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.gmail.username,
        pass: keys.gmail.password
    }
});

function sendVerification(email, token){
  var verifyLink = "http://effortlessreviews.com/verify/" + token;
  var body = "<h2>Review Norm</h2>" +
             "<p>Click the link below to verify your new account</p>" +
             "<p><a href='" + verifyLink + "'>" + verifyLink + "</a></p>";

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
}

function verifyToken(req, res){
  var db = req.app.locals.db;

  var sql = "UPDATE Users SET verified=1 WHERE token=?;"
  db.query(sql, [req.params.token], function(err, results, fields){
    if(err){
      return console.log(err);
    }

    if(results.changedRows == 0){
      var vars = {
        req: req,
        flash: {
          type: "error",
          message: "Invalid email token."
        }
      };
      res.render('main/login', vars);
      return;
    }

    var vars = {
      req: req,
      flash: {
        type: "success",
        message: "Email verified successfully. Log in below."
      }
    };
    res.render('main/login', vars);
  });
}



module.exports = {
  sendVerification: sendVerification,
  verifyToken: verifyToken
}
