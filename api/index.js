const exprees = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');

const postRotes = require('./routes/posts');

const app = exprees();

app.use(cors('*'));
app.use(morgan('dev'));

postRotes(app);

app.listen(config.srv.port, () => {
  console.log(`Server is runing on http://localhost:${config.srv.port}`);
});
