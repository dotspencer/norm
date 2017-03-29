module.exports = function(req){
  return req.session.userID != null;
}
