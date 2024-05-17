import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './features/categoriesSlice'
import expensesReducer from './features/expensesSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        expenses: expensesReducer
    },
    devTools: true
})