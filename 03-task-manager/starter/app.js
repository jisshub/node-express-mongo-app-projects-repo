const express = require('express');
const dotenv = require('dotenv');
const task = require('./routes/task');

// configure dotenv - laod env variables
dotenv.config({ path: './config/config.env' });

// initialze express app
const app = express();

// parse json
app.use(express.json());

// use express router
app.use('/api/v1/tasks', task);

// set port - listen to PORT 5000 always
const PORT = process.env.PORT || 5000;

// listen to port
app.listen(PORT, () => {
  console.log(`App runs in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
