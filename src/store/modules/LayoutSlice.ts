import { createSlice } from '@reduxjs/toolkit'

const LayoutSlice = createSlice({
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

export const { changeExtend } = LayoutSlice.actions

export default LayoutSlice.reducer
