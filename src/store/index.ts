import { configureStore } from '@reduxjs/toolkit'
import { LayoutReducer, RenderReducer } from './modules'
const store = configureStore({
  reducer: {
    layout: LayoutReducer,
    render: RenderReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
