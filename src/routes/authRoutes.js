var express = require('express');
var authRouter = express.Router();
var mysql = require('mysql');

authRouter.route('/login')
  .post((req, res) => {
    //
  });

authRouter.route('/signup')
  .post((req, res) => {
    //
  });


module.exports = authRouter;
