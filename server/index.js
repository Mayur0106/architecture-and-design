// server/index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const http = require('http');
const Sequelize = require('sequelize');

const app = express();




app.use(bodyParser.json());
app.use(cors());
 // app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));



app.use('/Public', express.static(path.join(__dirname, 'Public')));

const db = require('./app/models');

db.sequelize.sync({
  // alter: true
}).then(() => {
  console.log('altered Database with { alter: true }');
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

 require('./app/routes/card.routes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

 