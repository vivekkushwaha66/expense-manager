import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'
import { defaultCategory } from '../../utils/defaultValues'

const initialState = {
    items: [
        {
            ...defaultCategory
        },
        {
            id: "dd46b152-5c2d-44f9-855d-ccf95ab955bc",
            name: "Food"
        },
        {
            id: "9530693f-a2bf-48fe-b203-14abe924c0a1",
            name: "Fuel"
        }
    ]
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
