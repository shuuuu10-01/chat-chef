import { useToast } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { auth } from 'src/plugins/firebase';

import { LoginFormData } from 'src/types/auth';

const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const toast = useToast();

  /** Firebaseを使ったログイン処理 */
  const login = useCallback(async (data: LoginFormData) => {
    setLoading(true);
    setHasError(false);
    try {
      const user = await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  // エラー発生時にトーストを表示
  useEffect(() => {
    if (!hasError) return;
    toast({
      title: 'ログインに失敗しました',
      status: 'error',
      isClosable: true,
    });
  }, [hasError, toast]);

  return { login, isLoading };
};

export default useLogin;
