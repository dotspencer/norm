var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var app = express();
app.listen('2323');

app.use(expressLayouts);
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({secret: "bsmith"}));
require('./src/config/passport.js')(app);

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
  res.render('home', {req: req});
});
