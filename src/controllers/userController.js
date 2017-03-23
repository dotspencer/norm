var signup = function(req, res){
  var vars = {
    req: req
  }
  res.render('signup', vars);
};

var showAll = function(req, res){
  var vars = {
    req: req
  }
  res.render('all_users', vars);
};

module.exports = {
  signup: signup,
  showAll: showAll
};
