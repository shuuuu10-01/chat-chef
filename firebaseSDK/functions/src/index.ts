import { onRequest } from 'firebase-functions/v2/https';
import { verifyIdToken } from './utils/auth';
import { gptTalk } from './utils/chat-gpt';
import { postFirestore } from './utils/firestore';
import './plugins/firebase';
import { extractTokenFromBearer } from './utils/string';

export const chat = onRequest(async (request, response) => {
  response.set('Access-Control-Allow-Origin', process.env.WEB_APP_PATH);
  response.set('Access-Control-Allow-Headers', '*');
  if (request.method === 'OPTIONS') {
    response.status(204).end();
  }

  const idToken = extractTokenFromBearer(request.headers.authorization);

  if (!idToken) {
    response.status(403).json({ error: 'Unauthorized' });
    return;
  }

  try {
    await verifyIdToken(idToken!);
  } catch (error) {
    console.log(error);
    response.status(403).json({ error: 'Unauthorized' });
    return;
  }

  const ingredients = request.body.data.ingredients;
  const result = await gptTalk(ingredients);

  if (!result.content) {
    response.set(404).json({ error: 'Not Found' });
  }
  await postFirestore({
    ingredients: ingredients,
    chatGPTResult: result.content!,
  });

  response.status(204).send();
});
