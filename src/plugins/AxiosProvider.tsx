import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from 'src/plugins/axios';

export const AxiosProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const responseInterceptor = instance.interceptors.response.use(
      (response) => response,
      (error) => {
        switch (error.response?.status) {
          case 403:
            alert('認証情報に誤りがあります。再度ログインしてください。');
            navigate('/login');
            break;
          default:
            break;
        }
        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate]);

  return <>{children}</>;
};
