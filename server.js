const express = require('express');
const fs = require('fs');
const path = require('path');

const db = require('./db');

const {userRouter} = require('./controller/user');
const authRouter = require('./controller/auth');

const app = express();
const publicDir = path.join(__dirname, 'public');

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

app.use(express.static(publicDir));
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/user', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
