var userController = require('../controllers/userController');
var sessionController = require('../controllers/sessionController');
var mainController = require('../controllers/mainController');

var router = function(app){

  app.get('/', mainController.showPage);

  app.get('/login', sessionController.showPage);
  app.post('/login', sessionController.login);
  app.get('/signout', sessionController.signout);

  app.get('/signup', userController.showPage);
  app.post('/signup', userController.signup);

  app.get('/users', userController.showAll);
  app.get('/users/verify', userController.verify);

  app.get('/test', function(req, res){
    res.render('test', {req: req});
  });
};

module.exports = router;
