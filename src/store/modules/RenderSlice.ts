import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { CommonType } from '../../custom-components/component-list'
import { message } from 'antd'
type PositionPayload = {
  newTop: number
  newLeft: number
  uuid: string
}

type SizePayload = {
  newWidth: number
  newHeight: number
  uuid: string
}

const RenderSlice = createSlice({
  name: 'render',
  initialState: {
    renderList: [] as CommonType[],
    checkNode: {} as CommonType,
    curComIndex: -1, // 当前组件层级(-1表示谁也没选中，则一些功能需要禁用)
  },
  reducers: {
    // 添加待渲染元素
    addRenderDOM(state, { payload }) {
      state.renderList.push(payload)
    },
    // 更新组件的位置
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
    // 更新组件的宽高
    updateDOMSize(state, { payload }: PayloadAction<SizePayload>) {
      const { newHeight, newWidth, uuid } = payload
      state.renderList = state.renderList.map((item) => {
        if (item.uuid !== uuid) return item
        else {
          return {
            ...item,
            style: {
              ...item.style,
              width: newWidth,
              height: newHeight,
            },
          }
        }
      })
    },
    // 获取当前选中读的组件
    getCurrentDOM(state, { payload }: PayloadAction<CommonType>) {
      state.checkNode = { ...payload }
      state.curComIndex = state.renderList.findIndex((item) => item.uuid === payload.uuid)
      console.log('store index', state.curComIndex)
    },
    // 重置选中的组件(即谁也不选)
    resetClickDOM(state) {
      state.curComIndex = -1
    },
    // 删除选中的组件
    deleteSingleDOM(state) {
      state.renderList.splice(state.curComIndex, 1)
    },
    // 清空选中的组件
    resetSelectDOMs(state) {
      state.renderList = []
    },
    // 层级上移(在数组中越后挪)
    up(state) {
      // 根据uuid找出要操作的组件
      console.log('up')
      const index = state.curComIndex
      console.log('index', index)

      if (index < state.renderList.length - 1) {
        ;[state.renderList[index], state.renderList[index + 1]] = [
          state.renderList[index + 1],
          state.renderList[index],
        ]
        state.curComIndex = state.curComIndex + 1
      } else {
        message.warning('已经到顶了')
      }
    },
    // 层级下移(在数组中往前挪)
    down(state) {
      console.log('down')
      const index = state.curComIndex
      if (index > 0) {
        ;[state.renderList[index - 1], state.renderList[index]] = [
          state.renderList[index],
          state.renderList[index - 1],
        ]
        state.curComIndex = state.curComIndex - 1
      } else {
        message.warning('已经到底了')
      }
    },
    // 元素置顶(在数组中放到最后)
    top(state) {
      console.log('top')
      if (state.curComIndex < state.renderList.length - 1) {
        // 把当前组件切出来，放置数组最后
        const spliceItem = state.renderList.splice(state.curComIndex, 1)
        state.renderList.push(spliceItem[0])
        state.curComIndex = state.renderList.length - 1
      } else {
        message.warning('已经到顶了')
      }
    },
    // 元素置底
    bottom(state) {
      console.log('bottom')
      if (state.curComIndex > 0) {
        const spliceItem = state.renderList.splice(state.curComIndex, 1)
        state.renderList.unshift(spliceItem[0])
        state.curComIndex = 0
      } else {
        message.warning('已经到底了')
      }
    },
  },
})

export const {
  addRenderDOM,
  updateDOMPosition,
  updateDOMSize,
  getCurrentDOM,
  resetClickDOM,
  deleteSingleDOM,
  resetSelectDOMs,
  bottom,
  down,
  top,
  up,
} = RenderSlice.actions

export default RenderSlice.reducer
