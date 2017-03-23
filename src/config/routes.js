var userController = require('../controllers/userController');
var sessionController = require('../controllers/sessionController');

var router = function(app){

  app.get('/', (req, res) => {
    res.render('home', {req: req});
  });

  app.get('/login', sessionController.login);
  app.get('/signup', userController.signup);
  app.get('/users', userController.showAll);
};

module.exports = router;
