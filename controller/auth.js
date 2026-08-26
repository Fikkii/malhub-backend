const express = require('express');

const authRouter = express.Router();
const { users } = require('./user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { client, run } = require('../db');


authRouter.post('/signup', async (req, res) => {
  const { fullname, email, password } = req.body;

  const passwordHash = bcrypt.hashSync(password, 10);

  await client.connect();

    await client.db("Treasure").collection("users").insertOne({ fullname: fullname, email: email, password: passwordHash  });

  res.redirect('/login.html');
});

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

  await client.connect();

    const user = await client.db("Treasure").collection("users").findOne({ email: email });
    
    if (!user) {
        return res.status(401).send('Invalid email or password');
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(401).send('Invalid email or password');
    }

    let token = jwt.sign({ email: user.email }, 'thisisasecretkey', { expiresIn: '1h' });
    
    res.json({
        email: user.email,
        token: token
    });
});

module.exports = authRouter;