const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));
  
  app.listen(3000, () => {
    console.log('App listening on port 3000');
  });
  