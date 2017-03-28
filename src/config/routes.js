var userController = require('../controllers/userController');
var sessionController = require('../controllers/sessionController');

var router = function(app){

  app.get('/', (req, res) => {
    res.render('home', {req: req});
  });

  app.get('/login', sessionController.showPage);
  app.post('/login', sessionController.login);

  app.get('/signup', userController.showPage);
  app.post('/signup', userController.signup);

  app.get('/users', userController.showAll);
  app.get('/users/verify', userController.verify);

  app.get('/test', function(req, res){
    res.render('test', {req: req});
  });
};

module.exports = router;
