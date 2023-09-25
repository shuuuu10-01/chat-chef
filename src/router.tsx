import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from 'src/plugins/AuthProvider';
import { AxiosProvider } from 'src/plugins/AxiosProvider';

import Login from 'src/pages/Login';
import Top from 'src/pages/Top';

const CustomRouter: FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AxiosProvider>
          <Routes>
            <Route path='/' element={<Top />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Top />} />
          </Routes>
        </AxiosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default CustomRouter;
