import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomRouter from 'src/router';

import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomRouter />
  </React.StrictMode>,
);
