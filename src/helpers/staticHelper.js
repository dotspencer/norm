function currentPage(href, req){
  return href == req.originalUrl ? "current" : "";
}

function parseError(err){
  if(err == null || err.message == null){
    return "";
  }

  if(err.message.startsWith("ER_DUP_ENTRY")){
    return "An account with that email address already exists.";
  }

  return "";
}

module.exports = {
  currentPage: currentPage,
  parseError: parseError
};
