import admin from 'firebase-admin';

import key from './firestore-key.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(key),
});

export const firestore = admin.firestore();
