const express = require('express');
const cors = require('cors');
const example = require('./data/example.json');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(request,response) => {
    return response.json(example);
});

app.listen(8080, () => {
  console.log(`App listening on port http://localhost:8080/`);
  console.log('Press Ctrl+C to quit.');
});