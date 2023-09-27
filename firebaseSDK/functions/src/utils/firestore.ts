import { getJapaneseCurrentDate } from './string';
import { firestore } from '../plugins/firebase';

type postData = {
  ingredients: string[];
  chatGPTResult: string;
};

export const postFirestore = (data: postData) => {
  const today = getJapaneseCurrentDate();

  const resultRef = firestore.collection('result');
  return resultRef.add({
    ingredients: data.ingredients,
    chatGPTResult: data.chatGPTResult,
    date: today,
  });
};
