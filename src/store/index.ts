import { configureStore } from '@reduxjs/toolkit'
import { LayoutReducer } from './modules'
const store = configureStore({
  reducer: {
    layout: LayoutReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
