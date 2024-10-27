import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '@/types/types';

interface LikedUsersState {
  likedUsers: Record<string, Character>;
}

const initialState: LikedUsersState = {
  likedUsers: {},
};

const likedUsersSlice = createSlice({
  name: 'likedUsers',
  initialState,
  reducers: {
    toggleLikedUser: (state, action: PayloadAction<Character>) => {
      const { id } = action.payload;
      if (state.likedUsers[id]) {
        const { [id]: _, ...rest } = state.likedUsers;
        state.likedUsers = rest;
      } else {
        state.likedUsers[id] = action.payload;
      }
    },
  },
});

export const { toggleLikedUser } = likedUsersSlice.actions;

export const store = configureStore({
  reducer: {
    likedUsers: likedUsersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
