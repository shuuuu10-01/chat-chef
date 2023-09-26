import admin from 'firebase-admin';

export const verifyIdToken = (idToken) => {
  return new Promise((resolve, reject) => {
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((result) => {
        if (!result.admin) {
          reject(new Error('Unauthorized'));
        }
        resolve();
      })
      .catch(() => {
        reject(new Error('Unauthorized'));
      });
  });
};
