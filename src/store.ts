import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './features/comments/commentsSlice';
import modeReducer from './features/mode/modeSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    mode: modeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;