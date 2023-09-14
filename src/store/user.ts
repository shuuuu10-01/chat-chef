import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';

import { User } from 'src/types/auth';

const loginStateSelector = createSelector(
  (state: User) => state,
  (state) => {
    return !!state.id && !!state.email;
  },
);

export const selectors = {
  loginStateSelector,
};

export const { actions, reducer } = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
  },
  reducers: {
    updateUser(state, action: PayloadAction<User>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    resetUser(state) {
      state.id = '';
      state.email = '';
    },
  },
});
