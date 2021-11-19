const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

app.get('/factorial/:number', (req, res) => {
    var result = 1;
    for(i=1;i<=req.params.number;i++){
        result = result*i;
    }
    res.send(`${result}`);
  });

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
module.exports = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});