var userController = require('../controllers/userController');
var authController = require('../controllers/authController');

var router = function(app){

  app.get('/', (req, res) => {
    res.render('home', {req: req});
  });

  app.get('/login', authController.showPage);
  app.post('/login', authController.login);

  app.get('/signup', userController.showPage);
  app.post('/signup', userController.signup);

  app.get('/users', userController.showAll);
  app.get('/users/verify', userController.verify);
};

module.exports = router;
