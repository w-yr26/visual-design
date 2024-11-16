import { createSlice } from '@reduxjs/toolkit'
import type { CommonType } from '../../custom-components/component-list'
const RenderSlice = createSlice({
  name: 'render',
  initialState: {
    renderList: [] as CommonType[],
  },
  reducers: {
    addRenderDOM(state, { payload }) {
      state.renderList.push(payload)
    },
  },
})

export const { addRenderDOM } = RenderSlice.actions

export default RenderSlice.reducer
