var userController = require('../controllers/userController');
var sessionController = require('../controllers/sessionController');
var dashboardController = require('../controllers/dashboardController');
var emailController = require('../controllers/emailController');
var apiController = require('../controllers/apiController');
var loggedIn = require('../helpers/loggedIn.js');

var router = function(app){

  app.get('/', (req, res) => {
    // Logged in users go to the dashboard
    if(loggedIn(req)){
      res.redirect('/dashboard');
      return;
    }
    // Other users can see the homepage
    res.render('main/home', {req: req});
  });

  app.get('/login', sessionController.showPage);
  app.post('/login', sessionController.login);
  app.get('/signout', sessionController.signout);

  // Users
  app.get('/signup', userController.showPage);
  app.post('/signup', userController.signup);
  app.get('/user/verify', userController.verify);
  app.post('/user/update_place_id', userController.updatePlaceID);

  app.get('/test', function(req, res){
    res.render('test', {req: req});
  });

  // Dashboard
  app.get('/dashboard', dashboardController.showDashboard);
  app.get('/dashboard/stats', dashboardController.showStats);
  app.get('/dashboard/logs', dashboardController.showLogs);
  app.get('/dashboard/settings', dashboardController.showSettings);

  // Email
  app.get('/verify/:token', emailController.verifyToken);

  // API
  app.get('/api/user_info', apiController.getUserInfo);
};

module.exports = router;
