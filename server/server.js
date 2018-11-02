const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');

//~~~~ CROSS-ORIGIN RESOURCE SHARING ~~~~//
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..build')));

app.use(cors(corsOptions));

//~~~~ API ROUTES ~~~~/
const api = require('../server/routes/api.js')

//~~~~ SET API ROUTES ~~~~/
app.use('/api', api)


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})