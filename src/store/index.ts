import { configureStore } from '@reduxjs/toolkit';
import { reducer as suggestionReducer, actions as suggestionActions } from 'src/store/suggestion';
import {
  reducer as userReducer,
  actions as userActions,
  selectors as userSelectors,
} from 'src/store/user';

export const actions = {
  user: userActions,
  suggestion: suggestionActions,
};

export const store = configureStore({
  reducer: { user: userReducer, suggestion: suggestionReducer },
});

export const selectors = { user: userSelectors };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export * from './hooks';
