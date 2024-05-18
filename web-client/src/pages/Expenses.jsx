import React from 'react'
import { Button, SaveExpense } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { buttonSizes } from '../utils/buttonSizes'
import { buttonTypes } from '../utils/buttonTypes'
import { removeExpense } from '../store/features/expensesSlice'

export const Expenses = () => {
    const dispatch = useDispatch()
    const [showSave, setShowSave] = React.useState(false)
    const expenses = useSelector(state => state.expenses.items)
    const categories = useSelector(state => state.categories.items)


    const getCategoryName = (id) => {
        if (categories) {
            const categoryIndex = categories.findIndex(category => category.id === id)
            if (categoryIndex !== -1) {
                return categories[categoryIndex].name
            }
            return ''

        } else {
            return ''
        }
    }

    const handleDelete = (id) => {
        dispatch(removeExpense({ expenseId: id }))
    }



    return (
        <section className="mt-10">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-teal-500">Expenses</h1>
                <Button label='Add Expense' onClick={() => setShowSave(true)} />
            </div>
            <hr className="border-t-2 my-4 border-teal-400" />
            {showSave && <SaveExpense onClose={() => setShowSave(false)} />}

            <table className='min-w-full my-10'>
                <thead className='bg-teal-200'>
                    <tr>
                        <th className='p-2 border-r border-gray-200'>#</th>
                        <th className='p-2 border-r border-gray-200 text-start'>Name</th>
                        <th className='p-2 border-r border-gray-200 text-end'>Category</th>
                        <th className='p-2 border-r border-gray-200 text-end'>Amount</th>
                        <th className='p-2 border-r border-gray-200 text-end'>Date</th>
                        <th className='p-2 border-r border-gray-200 text-end'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={expense.id}>
                            <td className='p-2 border-b border-r border-gray-200 text-start'>{index + 1}</td>
                            <td className='p-2 border-b border-r border-gray-200 text-start'>{expense?.name}</td>
                            <td className='p-2 border-b border-r border-gray-200 text-end'>{getCategoryName(expense?.categoryId)}</td>
                            <td className='p-2 border-b border-r border-gray-200 text-end'>{expense?.amount}</td>
                            <td className='p-2 border-b border-r border-gray-200 text-end'>{expense?.date}</td>
                            <td className='p-2 border-b border-r border-gray-200 text-end'>
                                <Button label='Delete' onClick={() => handleDelete(expense.id)} buttonSize={buttonSizes.small} type={buttonTypes.danger} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}