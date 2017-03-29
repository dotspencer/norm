var loggedIn = require('../helpers/loggedIn.js');

function showPage(req, res){
  if(!loggedIn(req)){
    res.render('home', {req: req});
    return;
  }

  res.render('main', {req: req});
}

module.exports = {
  showPage: showPage
};
