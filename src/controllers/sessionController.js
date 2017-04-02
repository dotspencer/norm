var bcrypt = require('bcrypt');
var sessionHelper = require('../helpers/sessionHelper.js');
var loggedIn = require('../helpers/loggedIn.js');

/*
  Show the login page
*/
function showPage(req, res) {
  if(loggedIn(req)){
    res.redirect('/');
    return;
  }
  res.render('login', { req: req });
};

/*
  Signs the user out by destroying the session
 */
function signout(req, res){
  req.session.destroy();
  res.redirect('/');
}

/*
  Logs user in or shows error
  Called by POST request to /login
*/
function login(req, res){
  var db = req.app.locals.db;

  var formEmail = req.body.email;
  var formPassword = req.body.password;

  // Sets email and password to null if invalid
  formEmail = (formEmail == null | formEmail.length == 0) ? null : formEmail;
  formPassword = (formPassword == null | formPassword.length == 0) ? null : formPassword;
  if(formEmail == null | formPassword == null){
    renderError(req, res, 'login', "Required field(s) cannot be empty.");
    return;
  }

  getUserByEmail(req, res, db, formEmail, createSession);
}

/*
  Queries the database for a user by email
*/
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

/*
  Actually creates the session that is stored by the
  session store and in the browser session cookie
*/
function createSession(req, res, user){
  // Email found, hash it, match it
  var formEmail = req.body.email;
  var formPassword = req.body.password;
  var match = bcrypt.compareSync(formPassword, user.hash);

  if(match){
    req.session.userID = user.id;
    req.session.userName = user.name;
    res.redirect('/dashboard');
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
  login: login,
  signout: signout
};
