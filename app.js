var express = require('express');
var app = express();

app.listen('2323');
app.use(express.static('public'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('homepage');
});
