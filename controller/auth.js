const express = require('express');

const authRouter = express.Router();
const { users } = require('./user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


authRouter.post('/signup', (req, res) => {
  const { fullname, email, password } = req.body;

  const passwordHash = bcrypt.hashSync(password, 10);

  users.push({ fullname, email, password: passwordHash });
  res.redirect('/login.html');
});

authRouter.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).send('Invalid email or password');
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(401).send('Invalid email or password');
    }

    var token = jwt.sign({ email: user.email }, 'thisisasecretkey', { expiresIn: '1h' });
    
    res.json({
        email: user.email,
        token: token
    });
});

module.exports = authRouter;