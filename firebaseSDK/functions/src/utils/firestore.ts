import { getJapaneseCurrentDate } from './string';
import { firestore } from '../plugins/firebase';

type postData = {
  ingredients: string[];
  chatGPTResult: string;
};

export const postFirestore = (data: postData) => {
  const today = getJapaneseCurrentDate();

  const resultRef = firestore.collection('suggestion');
  return resultRef.add({
    date: today,
    ingredients: data.ingredients,
    chatGPT: data.chatGPTResult,
  });
};
