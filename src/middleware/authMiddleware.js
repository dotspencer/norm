var auth = (req, res, next) => {
  var db = req.app.locals.db;
  // console.log(req.session.id);
  // console.log("User ID:" + req.session.userID);

  next();
};

module.exports = auth;
