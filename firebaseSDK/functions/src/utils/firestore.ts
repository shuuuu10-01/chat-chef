import { getJapaneseCurrentDate } from './string';
import { firestore } from '../plugins/firebase';

type postData = {
  ingredients: string[];
  chatGPTResult: string;
};

export const postFirestore = async (data: postData) => {
  const today = getJapaneseCurrentDate();

  const resultRef = firestore.collection(`suggest/${today}/contents`);
  await resultRef.add({
    ingredients: data.ingredients,
    chatGPT: data.chatGPTResult,
    createdAt: new Date(),
  });

  const suggestDoc = firestore.doc(`suggest/${today}`);
  await suggestDoc.set({
    date: today,
  });
};
