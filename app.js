const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Todd's Container!");
});
 
module.exports.app = app;
