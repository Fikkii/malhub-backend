const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const publicDir = path.join(__dirname, 'public');

fs.mkdirSync(publicDir, { recursive: true });

const loginPage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #4f46e5, #0ea5e9);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card {
        width: 100%;
        max-width: 420px;
        background: rgba(255,255,255,0.95);
        padding: 30px 25px;
        border-radius: 16px;
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
      }
      h2 {
        margin-top: 0;
        text-align: center;
        color: #1f2937;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      input {
        width: 100%;
        padding: 12px 14px;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        font-size: 15px;
      }
      button {
        padding: 12px;
        border: none;
        border-radius: 10px;
        background: #4f46e5;
        color: white;
        font-weight: 600;
        cursor: pointer;
      }
      button:hover { background: #4338ca; }
      .link {
        text-align: center;
        margin-top: 12px;
        font-size: 14px;
      }
      .link a {
        color: #4f46e5;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Login</h2>
      <form action="#" method="post">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div class="link">
        Don't have an account? <a href="/signup.html">Sign Up</a>
      </div>
    </div>
  </body>
</html>
`;

const signupPage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign Up</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #10b981, #14b8a6);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card {
        width: 100%;
        max-width: 420px;
        background: rgba(255,255,255,0.95);
        padding: 30px 25px;
        border-radius: 16px;
        box-shadow: 0 14px 40px rgba(0, 0, 0, 0.18);
      }
      h2 {
        margin-top: 0;
        text-align: center;
        color: #1f2937;
      }
      form {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      input {
        width: 100%;
        padding: 12px 14px;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        font-size: 15px;
      }
      button {
        padding: 12px;
        border: none;
        border-radius: 10px;
        background: #10b981;
        color: white;
        font-weight: 600;
        cursor: pointer;
      }
      button:hover { background: #059669; }
      .link {
        text-align: center;
        margin-top: 12px;
        font-size: 14px;
      }
      .link a {
        color: #10b981;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Sign Up</h2>
      <form action="#" method="post">
        <input type="text" name="fullname" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
      <div class="link">
        Already have an account? <a href="/login.html">Login</a>
      </div>
    </div>
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, 'login.html'), loginPage);
fs.writeFileSync(path.join(publicDir, 'signup.html'), signupPage);

app.use(express.static(publicDir));

app.get('/', (req, res) => {
  res.redirect('/login.html');
});

app.get('/login', (req, res) => {
  res.redirect('/login.html');
});

app.get('/signup', (req, res) => {
  res.redirect('/signup.html');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
