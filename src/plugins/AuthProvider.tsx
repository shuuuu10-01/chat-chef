import { onAuthStateChanged } from 'firebase/auth';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/plugins/firebase';
import { actions, selectors, useAppSelector } from 'src/store';

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);

  const isLogin = useAppSelector((state) => selectors.user.loginStateSelector(state.user));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) return;
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          actions.user.updateUser({
            id: currentUser.uid,
            email: currentUser.email!,
          }),
        );
      } else {
        navigate('/login');
      }
      setLoading(false);
    });
  }, [isLogin, dispatch, navigate]);

  return <>{isLoading ? null : children}</>;
};

export default AuthProvider;
