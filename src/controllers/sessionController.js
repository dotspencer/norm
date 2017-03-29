var bcrypt = require('bcrypt');
var sessionHelper = require('../helpers/sessionHelper.js');

function showPage(req, res) {
  res.render('login', { req: req });
};

function login(req, res){
  var db = req.app.locals.db;
  var email = req.body.email;
  var password = req.body.password;

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
