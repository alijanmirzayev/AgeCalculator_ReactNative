import { configureStore } from '@reduxjs/toolkit'
import DateSlice from './Slices/DateSlice'

export const store = configureStore({
    reducer: {
        DateSlice: DateSlice
    }
})

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>