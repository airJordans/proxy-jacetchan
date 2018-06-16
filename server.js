const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/listings/:id', express.static(path.join(__dirname, 'public')));

// handles review routes
app.get('/listings/:listingId/overviews', (req, res) => {
  res.redirect(`http://ec2-54-219-133-3.us-west-1.compute.amazonaws.com${req.url}`);
});

app.get('/listings/:listingId/reviews', (req, res) => {
  res.redirect(`http://ec2-54-219-133-3.us-west-1.compute.amazonaws.com${req.url}`);
});

// handles booking routes
app.get('/listings/:listingId/booking/core', (req, res) => {
  res.redirect(`http://ec2-54-67-69-199.us-west-1.compute.amazonaws.com${req.url}`);
});

app.get('/listings/:listingId/booking/availability/', (req, res) => {
  res.redirect(`http://ec2-54-67-69-199.us-west-1.compute.amazonaws.com${req.url}`);
});

// handles carousel routes
app.get('/listings/:listingId/pictures', (req, res) => {
  res.redirect(`http://localhost:3004${req.url}`);
});

// handles description routes

app.get('/listings/:listingId/overview', (req, res) => {
  res.redirect(`http://awslistingmodule-env.x9r2zr55dh.us-west-2.elasticbeanstalk.com${req.url}`);
});

app.get('/listings/:listingId/arrangements', (req, res) => {
  res.redirect(`http://awslistingmodule-env.x9r2zr55dh.us-west-2.elasticbeanstalk.com${req.url}`);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
