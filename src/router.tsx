import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from 'src/pages/Login';
import Top from 'src/pages/Top';

const CustomRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
