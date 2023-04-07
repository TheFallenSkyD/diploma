import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from '@/services/baseApi'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
