const express = require('express');
const path = require('path');
const { sequelize } = require('./models');
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use('/api', require('./routes'));
app.listen(process.env.PORT || 5000);
console.log('ouvindo a porta 5000');