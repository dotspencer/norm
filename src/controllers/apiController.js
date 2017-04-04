var loggedIn = require('../helpers/loggedIn');

function getPlaceID(req, res){
  if(!loggedIn(req)) return res.status(401).send("Unauthorized");

  var db = req.app.locals.db;
  var sql = "SELECT google_place_id FROM Users WHERE id=?;";
  db.query(sql, [req.session.userID], function(err, results){
    if(err) console.log(err);
    res.json({
      placeID: results[0].google_place_id
    });
  });
}

module.exports = {
  getPlaceID: getPlaceID
};
