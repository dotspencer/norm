function createSession(userID, sessionID, db){

  var lookupStatement = "SELECT * FROM Session WHERE sid = ?;";
  db.query(lookupStatement, [sessionID], function(err, results, fields){
    if(err){
      console.log(err)
      return;
    }
    console.log("Executed: " + lookupStatement);

    // If session does not exist
    if(results.length == 0){
      insert(userID, sessionID, db);
    } else {
      console.log("Session id already exists.");
    }
  });
}

function insert(userID, sessionID, db){
  var insertStatement = "INSERT INTO Session (user_id, sid) VALUES (?, ?);"
  db.query(insertStatement, [userID, sessionID], function(err){
    if(err){
      console.log(err);
      return;
    }
    console.log("Executed: " + insertStatement);

    // Inserted Successfully
    deleteOldest(userID, db);
  });
}

function deleteOldest(userID, db){
  var stmt =
  "DELETE FROM Session " +
  "WHERE sid NOT IN ( " +
    "SELECT sid " +
    "FROM ( " +
      "SELECT sid " +
      "FROM Session " +
      "WHERE user_id = ? " +
      "ORDER BY created_on DESC " +
      "LIMIT 4 " +
    ") t " +
  ") AND user_id = ?;"

  db.query(stmt, [userID, userID], function(err){
    if(err) console.log(err);
    else console.log("Executed:" + stmt);
  })
}

module.exports = {
  createSession: createSession
};
