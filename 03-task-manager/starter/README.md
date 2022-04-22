**Task Manager App**

**config/config.env**
```env
NODE_ENV = development
PORT = 5000
```

**app.js**

```js
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
```

**controllers/task.js**

```js
const asyncHandler = require('../middlewares/async');
const ErrorResponse = require('../utils/errorResponse');

exports.getTask = asyncHandler(async (req, res, next) => {
    res.status(200).json({ success: true, data: 'Get task' });
})
```

**routes/task.js**

```js
const express = require('express');
const router = express.Router();
const { getTask } = require('../controllers/task');

router.route('/').get(getTask);

module.exports = router;
```

**middlewares/async.js**

```js
const asyncHandler = (fn) =>(req, res, next)=> {
    Promise.resolve(fn(req, res, next))
};

module.exports = asyncHandler;
```


time: 25: 00


https://www.youtube.com/watch?v=qwfE7fSVaZM&list=PLT6wrBlkasCNwUd-rUiYVIugugYMrxpQD
