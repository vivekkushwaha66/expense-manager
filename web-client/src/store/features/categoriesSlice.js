import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = {
    items: []
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        createCategory: (state, action) => {
            const { name } = action.payload
            const category = { id: uuid(), name }
            state.items.push(category)
        },
        removeCategory: (state, action) => {
            const { categoryId } = action.payload
            state.items = state.items.filter(category => category.id !== categoryId)
        }
    }
})


export const { createCategory, removeCategory } = categoriesSlice.actions
export default categoriesSlice.reducer
