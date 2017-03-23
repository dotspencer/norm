var currentPage = function(href, req){
  return href == req._parsedOriginalUrl.pathname ? "current" : "";
}

module.exports = {
  currentPage: currentPage
};
