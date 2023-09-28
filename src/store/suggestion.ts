import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Suggestion } from 'src/types/suggestion';

export const { actions, reducer } = createSlice({
  name: 'suggestion',
  initialState: {
    refreshFlag: true,
    date: '',
    contents: [],
  } as Suggestion & { refreshFlag: boolean },
  reducers: {
    updateSuggestion(state, action: PayloadAction<Suggestion>) {
      state.refreshFlag = false;
      state.date = action.payload.date;
      state.contents = action.payload.contents;
    },
    toggleRefreshFlag(state) {
      state.refreshFlag = !state.refreshFlag;
    },
  },
});
