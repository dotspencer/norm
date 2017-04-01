var loggedIn = require('../helpers/loggedIn.js');

function showDashboard(req, res){
  if(!loggedIn(req)){
    res.redirect('/login');
    return;
  }

  var vars = {
    req: req,
    layout: 'dashboard-layout'
  };
  res.render('dashboard', vars);
}


module.exports = {
  showDashboard: showDashboard
};
