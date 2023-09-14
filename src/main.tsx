import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomRouter from 'src/router.tsx';

import './styles/globals.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <CustomRouter />
    </ChakraProvider>
  </React.StrictMode>,
);
