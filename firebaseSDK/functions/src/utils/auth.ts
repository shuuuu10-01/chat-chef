import admin from 'firebase-admin';

export const verifyIdToken = (idToken: string) => {
  return new Promise((resolve, reject) => {
    admin
      .auth()
      .verifyIdToken(idToken)
      .then((result) => {
        if (!result.admin) {
          reject(new Error('Not Administrator'));
        }
        resolve('Authorized');
      })
      .catch((e) => {
        console.log(e);
        reject(new Error('Unauthorized'));
      });
  });
};
