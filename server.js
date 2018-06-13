const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/listings/:id', express.static(path.join(__dirname, 'public')));

app.get('/listings/:listingId/overviews', (req, res) => {
  res.redirect(`http://localhost:3003${req.url}`);
});

app.get('/listings/:listingId/reviews', (req, res) => {
  res.redirect(`http://localhost:3003${req.url}`);
});

// app.get('/listings/:listingId/reviews', (req, res) => {
//   res.send('test');
// });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});