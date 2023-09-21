import functions from '@google-cloud/functions-framework';
import dotenv from 'dotenv';
dotenv.config();

functions.http('chat-chef', async (req, res) => {
  res.send(JSON.stringify(result));
});
