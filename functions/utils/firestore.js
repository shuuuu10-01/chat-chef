import { firestore } from '../plugins/firebase.js';
import { getToday } from './getToday.js';

export const postFirestore = (data) => {
  const today = getToday();

  const resultRef = firestore.collection('result');
  return resultRef.add({
    ingredients: data.ingredients,
    content: data.content,
    date: today,
  });
};
