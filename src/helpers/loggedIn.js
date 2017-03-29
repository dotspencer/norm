module.exports = function(req){
  return req.session != null && req.session.userID != null;
}
