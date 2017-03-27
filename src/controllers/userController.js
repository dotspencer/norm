var bcrypt = require('bcrypt');
var staticHelper = require('../helpers/staticHelper');

/**
 * Renders the signup page
 */
function showPage(req, res){
  res.render('signup', {req: req});
};

/**
 * Attempts to create a new user and save it into the database
 */
function signup(req, res){
  var db = req.app.locals.db;

  var sql = 'INSERT INTO user (email, name, hash) VALUES (?, ?, ?);';

  var email = req.body.email;
  var name = req.body.name;
  var hash = bcrypt.hashSync(req.body.password, 11);
  var message = "";

  // Prevent empty strings from being submitted
  email = email.length == 0 ? null : email;
  name = name.length == 0 ? null : name;
  hash = req.body.password == 0 ? null : hash;

  db.query(sql, [email, name, hash], function(err, results, fields){

    // On error
    if(err){
      var flash = {
        type: "error",
        message: staticHelper.parseError(err)
      };
      res.render('signup', {req: req, flash: flash});
      return;
    }

    // Registration successful
    var flash = {
      type: "info",
      message: "Check your email to verify your account."
    };
    res.render('login', {req: req, flash: flash});

  });
};

function verify(req, res){
  res.send('Verify users from this page.');
}

/**
 * Shows all users in database
 */
function showAll(req, res){
  var db = req.app.locals.db;
  db.query('SELECT * FROM user;', function(err, rows){
    if(err){
      res.send(err.message);
      return;
    }
    var vars = {
      req: req,
      rows: rows
    };
    res.render('all_users', vars);
  });
};

module.exports = {
  showPage: showPage,
  signup: signup,
  verify: verify,
  showAll: showAll
};
