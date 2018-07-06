require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use('/listings/:id', express.static(path.join(__dirname, 'public')));
app.use(cors());

// handles review routes
app.get('/listings/:listingId/overviews', (req, res) => {
  res.redirect(`http://ec2-18-221-134-157.us-east-2.compute.amazonaws.com${req.url}`);
});

app.get('/listings/:listingId/reviews', (req, res) => {
  res.redirect(`http://ec2-18-221-134-157.us-east-2.compute.amazonaws.com${req.url}`);
});

// handles booking routes
app.get('/listings/:listingId/booking/core', (req, res) => {
  res.redirect(`http://18.188.144.184${req.url}`);
});

app.get('/listings/:listingId/booking/availability/', (req, res) => {
  res.redirect(`http://18.188.144.184${req.url}`);
});

// handles description routes
app.get('/listings/:listingId/overview', (req, res) => {
  res.redirect(`http://18.188.210.40${req.url}`);
});

app.get('/listings/:listingId/arrangements', (req, res) => {
  res.redirect(`http://18.188.210.40${req.url}`);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
