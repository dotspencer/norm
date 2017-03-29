var bcrypt = require('bcrypt');
var sessionHelper = require('../helpers/sessionHelper.js');

function showPage(req, res) {
  res.render('login', { req: req });
};

function login(req, res){
  var db = req.app.locals.db;

  getUserByEmail(req, res, db, req.body.email, createSession);
}

function getUserByEmail(req, res, db, email, next) {
  // Lookup user email
  var sql = "SELECT * FROM User WHERE email = ?";
  db.query(sql, [email], function(err, results, fields) {
    if (err) {
      console.log(err.message);
      return;
    }
    // Return null if email was not found otherwise return user result
    var user = results.length < 1 ? null : results[0];

    if(user == null){
      renderError(req, res, 'login', "Email could not be found");
      return;
    }

    next(req, res, user);
  });
}

function createSession(req, res, user){
  // Email found, hash it, match it
  var formEmail = req.body.email;
  var formPassword = req.body.password;
  var match = bcrypt.compareSync(formPassword, user.hash);

  if(match){
    //   Possibly redirect to homepage and add param successful_login to url
    //   to show flash that they logged in successfully
    req.session.userID = user.id;
    renderSuccess(req, res, 'login', "Correct password. Good job!");
  } else {
    renderError(req, res, 'login', "Incorrect password. Try again.");
  }
}

function renderError(req, res, view, message){
  res.render(view, {
    req: req,
    flash: {
      type: "error",
      message: message
    }
  });
}

function renderSuccess(req, res, view, message){
  res.render(view, {
    req: req,
    flash: {
      type: "success",
      message: message
    }
  });
}

module.exports = {
  showPage: showPage,
  login: login
};
