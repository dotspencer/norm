var bcrypt = require('bcrypt');

function showPage(req, res) {
  res.render('login', { req: req });
};

function login(req, res){
  var db = req.app.locals.db;

  var email = req.body.email;
  var password = req.body.password;

  if (email == null | email.length == 0 | password == null | password.length == 0) {
    renderError(req, res, 'login', "Email and/or password cannot be blank");
    return;
  }

  var sql = "SELECT * FROM User WHERE email = ?";
  db.query(sql, [req.body.email], function(err, results, fields){
    if(err){
      res.send(err.message);
      return;
    }

    if(results.length < 1){
      renderError(req, res, 'login', "Email could not be found");
    }

    // Only one result possible since email has unique constraint in db
    var hash = results[0].hash;
    var match = bcrypt.compareSync(password, hash);

    if(match){
      // TODO login user here
      //   Possibly redirect to homepage and add param successful_login to url
      //   to show flash that they logged in successfully
      renderSuccess(req, res, 'login', "Correct password. Good job!");
    } else {
      renderError(req, res, 'login', "Incorrect password. Try again.");
    }
  });
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
