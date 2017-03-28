var auth = (req, res, next) => {
  var db = req.app.locals.db;
  console.log(req.sessionID);


  next();
};

module.exports = auth;
