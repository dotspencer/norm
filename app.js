var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

app.listen('2323');
app.use(express.static('public'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

// Menu data
app.locals.navData = require('./src/config/navData.json');

/*=======
  Routes
========*/

var userRouter = require('./src/routes/userRoutes');
app.use('/users', userRouter);

var authRouter = require('./src/routes/authRoutes');
app.use('/auth', authRouter);

app.get('/', (req, res) => {
  res.render('homepage', {req: req});
});
