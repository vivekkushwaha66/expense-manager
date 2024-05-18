import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

const initialState = {
    items: []
}

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        createExpense: (state, action) => {
            const { categoryId, amount, name, date } = action.payload
            const expense = { id: uuid(), categoryId, amount, name, date }
            console.log(date)
            state.items.push(expense)
        },
        removeExpense: (state, action) => {
            const { expenseId } = action.payload
            state.items = state.items.filter(expense => expense.id !== expenseId)
        }
    }
})


export const { createExpense, removeExpense } = expensesSlice.actions
export default expensesSlice.reducer