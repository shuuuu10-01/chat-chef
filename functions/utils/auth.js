import admin from 'firebase-admin';

export const verifyIdToken = (idToken) => {
  return new Promise((resolve) => {
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((result) => {
        if (!result.admin) {
          throw new Error('Unauthorized-admin');
        }
        resolve();
      })
      .catch((e) => {
        throw new Error('Unauthorized');
      });
  });
};
