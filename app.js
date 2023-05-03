const express = require('express');
const path = require('path');

const exphbs  = require('express-handlebars');
const hbs = exphbs.create({
    /* configuration options here */
});

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { layout: 'layouts/main' });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false
});

// import the necessary models here

// sync the models with the database
sequelize.sync();

const session = require('express-session');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  res.locals.currentUser = req.session.user;
  next();
});

