import { configureStore } from '@reduxjs/toolkit';
import {
  reducer as userReducer,
  actions as userActions,
  selectors as userSelectors,
} from 'src/store/user';

export const actions = {
  user: userActions,
};

export const store = configureStore({
  reducer: { user: userReducer },
});

export const selectors = { user: userSelectors };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
