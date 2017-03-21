var express = require('express');
var userRouter = express.Router();

userRouter.route('/login')
  .get((req, res) => {
    res.render('login', {req: req});
  });

userRouter.route('/signup')
  .get((req, res) => {
    res.render('signup', {req: req});
  });

module.exports = userRouter;
