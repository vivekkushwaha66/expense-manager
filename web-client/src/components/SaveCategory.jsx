import { useFormik } from 'formik'
import { Button } from './Button'
import { useDispatch } from 'react-redux'
import { createCategory } from '../store/features/categoriesSlice'
import { buttonTypes } from '../utils/buttonTypes'
import { object, string } from 'yup'

const initialValues = {
    name: ''
}

const validationSchema = object({
    name: string().required('Please enter a valid category!')
})

export const SaveCategory = ({ onClose }) => {
    const dispatch = useDispatch()

    const cf = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            dispatch(createCategory(values))
            cf.resetForm()
            onClose()
        }
    })

    return (
        <div className='border-2 p-4 max-w-md rounded-sm border-teal-100'>
            <form onSubmit={cf.handleSubmit} autoComplete='off'>
                <div className='flex flex-col gap-2 my-2' >
                    <label className='font-medium' htmlFor="name">Name</label>
                    <input
                        className='border-2 p-1 outline-none'
                        type="text"
                        name="name"
                        id="name"
                        value={cf.values.name}
                        onChange={cf.handleChange}
                    />
                    {cf.errors.name && <small className='text-red-500 font-bold'>{cf.errors.name}</small>}
                </div>
                <div className='flex gap-2 justify-end'>
                    {onClose && <Button onClick={onClose} type={buttonTypes.danger} label="Close" />}
                    <Button buttonType="submit" label="Save" />
                </div>
            </form>
        </div>

    )
}