import { User, onAuthStateChanged } from 'firebase/auth';
import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/plugins/firebase';
import { actions, selectors, useAppSelector } from 'src/store';

import { fetchFireStore } from 'src/utils/firestore';

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  const isLogin = useAppSelector((state) => selectors.user.loginStateSelector(state.user));
  const { refreshFlag } = useAppSelector((state) => state.suggestion);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const observer = useCallback(
    async (currentUser: User | null) => {
      if (currentUser === null) {
        navigate('/login');
        return setLoading(false);
      }

      const { claims } = await currentUser.getIdTokenResult();
      dispatch(
        actions.user.updateUser({
          id: currentUser.uid,
          email: currentUser.email!,
          isAdmin: !!claims.admin,
        }),
      );

      setLoading(false);
    },
    [dispatch, navigate],
  );

  useEffect(() => {
    if (isLogin) return;
    return onAuthStateChanged(auth, observer);
  }, [isLogin, observer]);

  useEffect(() => {
    if (!isLogin || !refreshFlag) return;
    fetchFireStore();
  }, [isLogin, refreshFlag]);

  return <>{isLoading ? null : children}</>;
};

export default AuthProvider;
