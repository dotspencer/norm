var bcrypt = require('bcrypt');
var staticHelper = require('../helpers/staticHelper');

/**
 * Renders the signup page
 */
function signup(req, res){
  res.render('signup', {req: req});
};

/**
 * Attempts to create a new user and save it into the database
 */
function create(req, res){
  var db = req.app.locals.db;

  var sql = 'INSERT INTO user (email, name, hash) VALUES (?, ?, ?);';

  var email = req.body.email;
  var name = req.body.name;
  var hash = bcrypt.hashSync(req.body.password, 11);
  var message = "";

  db.query(sql, [email, name, hash], function(err, results, fields){
    console.log(req);
    res.render('signup', {req: req});
  });
};

/**
 * Shows all users in database
 */
function showAll(req, res){
  var db = req.app.locals.db;
  db.query('SELECT * FROM user', function(err, rows){
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
  signup: signup,
  create: create,
  showAll: showAll
};
