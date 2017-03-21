var express = require('express');
var app = express();

app.listen('2323');
app.use(express.static('public'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

/*=======
  Routes
========*/

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/settings', (req, res) => {
  res.render('settings');
});

app.get('/send', (req, res) => {
  res.render('settings');
});
