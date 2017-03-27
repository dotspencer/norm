var userController = require('../controllers/userController');
var sessionController = require('../controllers/sessionController');

var router = function(app){

  app.get('/', (req, res) => {
    res.render('home', {req: req});
  });

  app.get('/login', sessionController.login);
  app.get('/signup', userController.signup);
  app.post('/signup', userController.create);
  app.get('/users', userController.showAll);
  app.get('/users/verify', userController.verify);
};

module.exports = router;
