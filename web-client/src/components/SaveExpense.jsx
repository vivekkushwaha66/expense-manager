import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { number, object, string } from "yup"
import { Button } from './'
import { defaultCategory } from "../utils/defaultValues"
import { createExpense } from "../store/features/expensesSlice"
import { format } from 'date-fns'
import { buttonTypes } from "../utils/buttonTypes"

const initialValues = {
    name: '',
    categoryId: defaultCategory.id,
    amount: '',
    date: format(new Date(), 'yyyy-MM-dd')
}

const validationSchema = object({
    name: string().required(),
    categoryId: string().required(),
    amount: number().required()
})


export const SaveExpense = ({ onClose }) => {
    const categories = useSelector(state => state.categories.items)
    const ef = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            handleSaveExpense(values)
        }
    })
    const dispatch = useDispatch()

    const handleSaveExpense = (expense) => {
        dispatch(createExpense(expense))
        ef.handleReset()
        onClose()
    }

    return (
        <div className='border-2 p-4 max-w-md rounded-sm border-teal-100'>
            <form onSubmit={ef.handleSubmit} autoComplete="off">
                <div className='flex flex-col gap-2 my-2'>
                    <label htmlFor="name">Name</label>
                    <input type="text" value={ef.values.name} onChange={ef.handleChange} id="name" name="name" className='border-2 p-1 outline-none' />
                    {ef.errors.name && <small className='text-red-500 font-bold'>{ef.errors.name}</small>}
                </div>
                <div className='flex flex-col gap-2 my-2'>
                    <label htmlFor="categoryId">Category</label>
                    <select name="categoryId" id="categoryId" value={ef.values.categoryId} onChange={ef.handleChange} className='border-2 p-1 outline-none' >
                        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                    </select>
                    {ef.errors.categoryId && <small className='text-red-500 font-bold'>{ef.errors.categoryId}</small>}
                </div>
                <div className='flex flex-col gap-2 my-2'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" value={ef.values.amount} onChange={ef.handleChange} className='border-2 p-1 outline-none' />
                    {ef.errors.amount && <small className='text-red-500 font-bold'>{ef.errors.amount}</small>}
                </div>
                <div className='flex flex-col gap-2 my-2'>
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" value={ef.values.date} onChange={ef.handleChange} className='border-2 p-1 outline-none' />
                    {ef.errors.date && <small className='text-red-500 font-bold'>{ef.errors.date}</small>}
                </div>
                <div className='flex gap-2 justify-end'>
                    {onClose && <Button label="Close" onClick={onClose} type={buttonTypes.danger} />}
                    <Button buttonType="submit" label="Save" />
                </div>
            </form>
        </div>
    )

}