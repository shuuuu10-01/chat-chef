import admin from 'firebase-admin';

import key from './firestore-key.json';

admin.initializeApp({
  credential: admin.credential.cert(key as unknown as string),
});

export const firestore = admin.firestore();
