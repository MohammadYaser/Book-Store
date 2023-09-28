import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagories: [],
  status: 'Under Construction',
};

const catagoriesSlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {
    statusCheck: (state) => state.status,
  },
});

export const { statusCheck } = catagoriesSlice.actions;
export default catagoriesSlice.reducer;
