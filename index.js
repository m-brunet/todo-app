const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('./src/users/users.schema');
require('./src/products/products.schema');

const routes = require('./routes/api');
const routesV2 = require('./src/users/users.routes');
const routesV3 = require('./src/products/products.routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to the database
//const DatabaseSettings = process.env.DB;
mongoose.connect('mongodb://localhost:27017/sorakapp', { useNewUrlParser: true })
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log(err));

// Since mongoose promise is depreciated, we overide it with node's promise
// mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);
app.use('/api/v2', routesV2);
app.use('/api/v3', routesV3);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

// app.use((req, res, next) => {
//   res.send('Welcome to Express');
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
