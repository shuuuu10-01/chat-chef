import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import CustomRouter from 'src/router.tsx';
import { store } from 'src/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <Provider store={store}>
        <CustomRouter />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
);
