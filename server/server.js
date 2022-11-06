/* eslint-disable prettier/prettier */
const app = require('express')();
const PORT = 5000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
mongoose.connect('mongodb://localhost/OTP');
const UserRouter = require('./API'); 

const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/UserTemp', UserRouter);

app.listen(PORT, () => {
  console.log(`Application started at http://localhost:${PORT}/`);
});
