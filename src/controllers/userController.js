/**
 * Renders the signup page
 */
function signup(req, res){
  res.render('signup', {req: req});
};

/**
 * Attempts to create a new user and
 * save it into the database
 */
function create(req, res){
  var vars = {
    req: req
  };
  //res.send(JSON.stringify(req));
  console.log(req.body);
  //res.render('signup', vars);
};

function showAll(req, res){
  var vars = {
    req: req
  };
  res.render('all_users', vars);
};

module.exports = {
  signup: signup,
  create: create,
  showAll: showAll
};
