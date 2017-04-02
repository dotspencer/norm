function getUserById(req, id){
  var db = req.app.locals.db;

  var sql = "SELECT * FROM User WHERE ";
}

module.exports = {
  getUserById: getUserById
};
