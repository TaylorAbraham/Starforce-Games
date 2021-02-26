const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

const app = express();
app.use(compression());
app.use(express.static(path.join(__dirname, 'build/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.use('/avians', express.static(path.join(__dirname, 'build/attack-of-the-avians/')));

app.get('/ping', (req, res) => res.send('pong'));

app.listen(process.env.PORT || 8080);
