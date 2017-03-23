var login = function(req, res){
  var pass = {
    req: req
  }
  res.render('login', pass);
};

module.exports = {
  login: login
};
