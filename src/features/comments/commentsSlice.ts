import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../types/comment';

type InitialState = {
  currentComment: Comment | null;
}

const initialState: InitialState = {
    currentComment: null,
  }

const commentsSlice = createSlice({
  name: 'bible',
  initialState,
  reducers: {
    setComment(state, action: PayloadAction<Comment>) {
      state.currentComment = action.payload;
    },
  },
});

export const { setComment } = commentsSlice.actions;
export default commentsSlice.reducer;
