var express = require('express');
var userRouter = express.Router();

userRouter.route('/login')
  .get((req, res) => {
    res.send('Place to log in.');
  });

userRouter.route('/signup')
  .get((req, res) => {
    res.send('Place to signup.');
  });

module.exports = userRouter;
