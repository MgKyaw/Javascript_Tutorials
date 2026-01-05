const requests = [];           // long lived object
app.get('/', (req, res) => {
  requests.push(req.id);       // short lived req object
  res.sendStatus(200);
})
