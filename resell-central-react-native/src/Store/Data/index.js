import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'data',
  initialState: { test: null },
  reducers: {
    changeData: (state, { payload: { test } }) => {
      if (typeof test !== 'undefined') {
        state.test = test
      }
    },
    
  },
})

export const { changeData } = slice.actions

export default slice.reducer
