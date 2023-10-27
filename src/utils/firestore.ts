import { query, collection, getDocs, orderBy } from 'firebase/firestore';
import { firestore } from 'src/plugins/firebase';
import { actions, store } from 'src/store';

import { Content } from 'src/types/suggestion';

import { getJapaneseCurrentDate } from 'src/utils/string';

export const fetchFireStore = async () => {
  const japaneseCurrentDate = getJapaneseCurrentDate();

  const { date, refreshFlag } = store.getState().suggestion;

  if (!(refreshFlag || date !== japaneseCurrentDate)) return;

  const q = query(
    collection(firestore, 'suggest', japaneseCurrentDate, 'contents'),
    orderBy('createdAt', 'desc'),
  );

  const result = await getDocs(q);

  const contents = [] as Content[];
  result.forEach((r) => {
    const data = r.data();
    contents.push({
      chatGPT: data.chatGPT,
      ingredients: data.ingredients,
    });
  });

  store.dispatch(
    actions.suggestion.updateSuggestion({
      date: japaneseCurrentDate,
      contents: contents,
    }),
  );
};

export const getContents = async (date: string) => {
  const q = query(collection(firestore, 'suggest', date, 'contents'), orderBy('createdAt', 'desc'));

  const result = await getDocs(q);

  const contents = [] as Content[];
  result.forEach((r) => {
    const data = r.data();
    contents.push({
      chatGPT: data.chatGPT,
      ingredients: data.ingredients,
    });
  });
  return contents;
};

export const getHistoryDate = async () => {
  const q = query(collection(firestore, 'suggest'), orderBy('date', 'desc'));

  const result = await getDocs(q);
  const dateList: string[] = [];
  result.forEach((r) => {
    dateList.push(r.data().date as string);
  });
  return dateList;
};
