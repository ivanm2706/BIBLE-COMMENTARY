import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type InitialState = {
  lang: 'ru' | 'en';
}

const initialState: InitialState = {
  lang: 'ru',
}


const modeSlice = createSlice({
  name: 'bible',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<'ru' | 'en'>) {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = modeSlice.actions;

export default modeSlice.reducer;