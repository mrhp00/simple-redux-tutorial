import { configureStore } from '@reduxjs/toolkit'
import counterSliceStore from './counterSliceStore'

export default configureStore({
  reducer: {
    counter:counterSliceStore,
  },
})