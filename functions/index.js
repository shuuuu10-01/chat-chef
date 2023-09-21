const functions = require('@google-cloud/functions-framework');

functions.http('chat-chef', (req, res) => {
  console.log(req.query);
  res.send('Hello World!');
});
