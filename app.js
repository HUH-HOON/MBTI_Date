const http = require('http');
const fs = require('fs').promises;
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const loginRouter = require('./route/login');
const loginProcessRouter = require('./route/loginProcess');
const signupRouter = require('./route/signup');
const signupProcessRouter = require('./route/signupProcess');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('./public/html/index.html', {root:__dirname });
});

app.use('/static', express.static(__dirname + '/public/'));

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

app.use('/route/login', loginRouter);
app.use('/route/loginProcess', loginProcessRouter);
app.use('/route/signup', signupRouter);
app.use('/route/signupProcess', signupProcessRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.set('view engine','ejs');
app.set('views','./public/view_ejs');

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});