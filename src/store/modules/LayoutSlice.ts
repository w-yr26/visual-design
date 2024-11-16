import { createSlice } from '@reduxjs/toolkit'

const LayoutSliceReducer = createSlice({
  name: 'layout',
  initialState: {
    isExtend: true,
  },
  reducers: {
    changeExtend(state, { payload }) {
      state.isExtend = payload
    },
  },
})

export const { changeExtend } = LayoutSliceReducer.actions

export default LayoutSliceReducer.reducer
