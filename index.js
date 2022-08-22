const express = require('express');
const bodyParser = require('body-parser');

const talkersRoute = require('./routes/talkers.routes');
const loginRoute = require('./routes/login.routes');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkersRoute);
app.use('/login', loginRoute);

app.use((err, _req, res, _next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status).json({ message: err.message });
  res.render('error');
});
// res.status(err.status).json({ message: err.message }));

app.listen(PORT, () => {
  console.log('Online');
});