var express = require('express');
var app = express();

app.listen('2323');
app.use(express.static('public'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

/*=======
  Routes
========*/

var userRouter = require('./src/routes/userRoutes');
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.render('homepage');
});
