import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BibleBooks } from '../../types/bible';



type InitialState = {
  currentBook: BibleBooks;
  currentChapter: number;
}

const initialState: InitialState = {
    currentBook: BibleBooks.Matthew,
    currentChapter: 1,
  }

const bibleSlice = createSlice({
  name: 'bible',
  initialState,
  reducers: {
    setBook(state, action: PayloadAction<BibleBooks>) {
      state.currentBook = action.payload;
    },
    setChapter(state, action) {
      state.currentChapter = action.payload;
    },
  },
});

export const { setBook, setChapter } = bibleSlice.actions;
export default bibleSlice.reducer;
