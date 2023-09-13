import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/index.scss';
import CustomRouter from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomRouter />
  </React.StrictMode>,
);
