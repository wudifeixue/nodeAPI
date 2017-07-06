let express = require('express'),
  app = express(),
  port = process.env.PORT || 10086;

app.listen(port);

console.log(`node server started on: ${port}`);