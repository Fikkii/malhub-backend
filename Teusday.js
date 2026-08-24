const express = require('express');
const fs = require('fs');
const path = require('path');

const {userRouter} = require('./controller/user');
const authRouter = require('./controller/auth');

const app = express();
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir));
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/user', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
