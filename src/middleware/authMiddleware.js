var auth = (req, res, next) => {
  var db = req.app.locals.db;
  console.log(req.sessionID);

  //req.session.userID = 1;
  console.log("User ID:" + req.session.userID);

  next();
};

module.exports = auth;
