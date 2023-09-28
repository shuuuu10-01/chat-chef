import { query, collection, where, getDocs } from 'firebase/firestore';
import { firestore } from 'src/plugins/firebase';
import { actions, store } from 'src/store';

import { Content } from 'src/types/suggestion';

import { getJapaneseCurrentDate } from 'src/utils/string';

export const fetchFireStore = async () => {
  const japaneseCurrentDate = getJapaneseCurrentDate();

  const { date, refreshFlag } = store.getState().suggestion;

  if (!(refreshFlag || date !== japaneseCurrentDate)) return;

  const q = query(collection(firestore, 'suggestion'), where('date', '==', japaneseCurrentDate));

  const result = await getDocs(q);

  if (result.empty) return;

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
