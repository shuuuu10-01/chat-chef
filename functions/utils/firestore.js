import admin from 'firebase-admin';
import { getToday } from './getToday.js';

import key from './firestore-key.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(key),
});

const firestore = admin.firestore();

export const postFirestore = (data) => {
  const today = getToday();

  const resultRef = firestore.collection('result');
  return resultRef.add({
    ingredients: data.ingredients,
    content: data.content,
    date: today,
  });
};
