import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from 'src/plugins/AuthProvider';

import History from 'src/pages/History';
import Login from 'src/pages/Login';
import Suggest from 'src/pages/Suggest';
import Top from 'src/pages/Top';

const CustomRouter: FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/login' element={<Login />} />
          <Route path='/suggest' element={<Suggest />} />
          <Route path='/history' element={<History />} />
          <Route path='*' element={<Top />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default CustomRouter;
