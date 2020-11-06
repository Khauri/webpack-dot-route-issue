const express = require('express');
const {PORT = 8080} = process.env;

const app = express();

app.use((req, res) => {
  res.status(200).send(`Successfully Reached ${req.url}`);
});

const listener = app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${listener.address().port}`);
});