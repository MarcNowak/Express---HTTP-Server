const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/27-2_task/taskViews/${name}`));
  };
  next();
});

app.use('/user', (req, res) => {
  res.status(404).show('forbidden.html');
});

app.use(express.static(path.join(__dirname, '/27-2_task/taskPublic')));

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/home', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.use((req, res) => {
  res.status(404).show('404.html');
});
  

app.listen(8888, () => {
  console.log('Server is running on port: 8888');
});