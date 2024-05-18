import React from "react"
import { SaveCategory, Button } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { buttonTypes } from "../utils/buttonTypes"
import { buttonSizes } from "../utils/buttonSizes"
import { removeCategory } from "../store/features/categoriesSlice"

export const Categories = () => {
    const [showSave, setShowSave] = React.useState(false)
    const categories = useSelector(state => state.categories.items)
    const dispatch = useDispatch()

    const handleDelete = (categoryId) => {
        dispatch(removeCategory({ categoryId }))
    }

    return (
        <section className="mt-10">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-teal-500">Categories</h1>
                <Button label='Add Category' onClick={() => setShowSave(true)} />
            </div>
            <hr className="border-t-2 my-4 border-teal-400" />
            {showSave && <SaveCategory onClose={() => setShowSave(false)} />}
            <div className="my-4 max-w-md">
                {categories.map((category) => (
                    <div className="border-b-2 p-2 border-teal-300 flex items-center justify-between" key={category.id}>
                        <h4 className="font-medium">{category.name}</h4>
                        <Button onClick={() => handleDelete(category.id)} buttonSize={buttonSizes.small} type={buttonTypes.danger} label='Delete' />
                    </div>
                ))}
            </div>
        </section>
    )
}