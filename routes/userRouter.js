// server/routes/userRouter.js
const express = require('express');
const userRouter = express.Router();
const updateUser = require('../controller/userCont');

userRouter.post('/user', updateUser);

module.exports = userRouter;
