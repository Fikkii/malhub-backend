const express = require('express');

const userRouter = express.Router();

const users = [];

function jwtMiddleware(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send('Access Denied');
  }

  try {
    const decoded = jwt.verify(token, 'thisisasecretkey');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send('Invalid Token');
  }
}

userRouter.get('/', jwtMiddleware, (req, res) => {
  res.json(users);
});

userRouter.get('/profile', jwtMiddleware, (req, res) => {
  res.json(req.user);
});

module.exports = {userRouter, users};