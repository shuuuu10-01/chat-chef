import { onRequest } from 'firebase-functions/v2/https';
import { verifyIdToken } from './utils/auth';
import { gptTalk } from './utils/chat-gpt';
import { postFirestore } from './utils/firestore';
import './plugins/firebase';

export const chat = onRequest(async (request, response) => {
  const idToken = request.headers.authorization;

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

  const ingredients = request.body.ingredients;
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
