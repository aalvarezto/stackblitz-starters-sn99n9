const express = require('express');
const app = express();

const db = {
  likes: 0,
};

app.use(express.static('public'));

app.get('/', function sendWebSite(req, res) {
  res.status(200).sendFile('../public');
});

app.get('/likes', function showLikes(req, res) {
  res.status(200).json({ likes: db.likes });
});

app.post('/likes', function addOneLike(req, res) {
  db.likes = db.likes + 1;
  // console.log(db);
  res.redirect('/');
});

app.get('/', function sayHi(req, res) {
  // Nunca llega a este get, ya que hay un get con "/" arriba.
  res.json({ message: 'Hola Mundo!' });
});

app.listen(8080, function logStatus() {
  console.log('Server OK!');
});
