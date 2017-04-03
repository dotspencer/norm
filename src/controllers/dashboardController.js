var loggedIn = require('../helpers/loggedIn.js');

function showDashboard(req, res){
  if(!loggedIn(req)){
    res.redirect('/login');
    return;
  }

  var vars = {
    req: req,
    layout: 'dashboard/layout'
  };
  res.render('dashboard/dash', vars);
}

function showStats(req, res){
  if(!loggedIn(req)){
    res.redirect('/login');
    return;
  }

  var vars = {
    req: req,
    layout: 'dashboard/layout'
  };
  res.render('dashboard/stats', vars);
}

function showLogs(req, res){
  if(!loggedIn(req)){
    res.redirect('/login');
    return;
  }

  var vars = {
    req: req,
    layout: 'dashboard/layout'
  };
  res.render('dashboard/logs', vars);
}

function showSettings(req, res){
  if(!loggedIn(req)){
    res.redirect('/login');
    return;
  }

  var vars = {
    req: req,
    layout: 'dashboard/layout'
  };
  res.render('dashboard/settings', vars);
}

module.exports = {
  showDashboard: showDashboard,
  showStats: showStats,
  showLogs: showLogs,
  showSettings: showSettings
};
