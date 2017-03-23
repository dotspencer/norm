var signup = function(req, res){
  var pass = {
    req: req
  }
  res.render('signup', pass);
};

module.exports = {
  signup: signup
};
