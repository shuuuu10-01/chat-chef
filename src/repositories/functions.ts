import { httpsCallable } from 'firebase/functions';
import { functions } from 'src/plugins/firebase';

export const runChatGPT = (ingredients: string[]) => {
  const chat = httpsCallable<{ ingredients: string[] }>(functions, 'chat');
  return chat({ ingredients: ingredients });
};
