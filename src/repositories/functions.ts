import instance from 'src/plugins/axios';
import { store } from 'src/store';

export const runChatGPT = (ingredients: string[]) => {
  const idToken = store.getState().user.idToken;
  return instance.post(
    '',
    { ingredients: ingredients },
    {
      headers: {
        Authorization: idToken,
      },
      timeout: 100000,
    },
  );
};
