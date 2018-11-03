const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
