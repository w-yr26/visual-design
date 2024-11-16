import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CommonType } from '../../custom-components/component-list'
type PositionPayload = {
  newTop: number
  newLeft: number
  uuid: string
}

const RenderSlice = createSlice({
  name: 'render',
  initialState: {
    renderList: [] as CommonType[],
    checkNode: {} as CommonType,
  },
  reducers: {
    addRenderDOM(state, { payload }) {
      state.renderList.push(payload)
    },
    updateDOMPosition(state, { payload }: PayloadAction<PositionPayload>) {
      const { newLeft, newTop, uuid } = payload

      // 更新组件位置信息
      state.renderList = state.renderList.map((item) => {
        if (item.uuid !== uuid) return item
        else {
          return {
            ...item,
            style: {
              ...item.style,
              top: newTop,
              left: newLeft,
            },
          }
        }
      })
    },
    getCurrentDOM(state, { payload }: PayloadAction<CommonType>) {
      state.checkNode = { ...payload }
    },
  },
})

export const { addRenderDOM, updateDOMPosition, getCurrentDOM } = RenderSlice.actions

export default RenderSlice.reducer
