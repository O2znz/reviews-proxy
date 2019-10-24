const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/:listingid', express.static(path.join(__dirname, '../public')));

app.get('/:listingid', (req, res) => {
  res.end();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));