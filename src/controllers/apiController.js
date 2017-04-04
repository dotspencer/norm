var loggedIn = require('../helpers/loggedIn');

function getUserInfo(req, res){
  if(!loggedIn(req)) return res.status(401).send("Unauthorized");

  var db = req.app.locals.db;
  var sql = "SELECT name, email, google_place_id FROM Users WHERE id=?;";
  db.query(sql, [req.session.userID], function(err, results){
    if(err) console.log(err);
    res.json({
      name: results[0].name,
      email: results[0].email,
      placeID: results[0].google_place_id
    });
  });
}

module.exports = {
  getUserInfo: getUserInfo
};
