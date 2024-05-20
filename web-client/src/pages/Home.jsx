import { useSelector } from 'react-redux'

export const Home = () => {

    const expenses = useSelector(state => state.expenses.items)


    const getTotalExpenses = (items) => {
        let total = 0

        items.forEach(element => {
            total += element.amount
        })

        return total.toFixed(2)
    }

    return (
        <section className="mt-10">
            <div className="border p-4 rounded-md shadow-md space-y-5 bg-gradient-to-br from-white to-emerald-400">
                <h4 className="text-2xl font-medium">Total Expenses</h4>
                <hr className="border-b-2 border-black" />
                <p className="text-5xl text-red-600 font-semibold">
                    {getTotalExpenses(expenses)}
                    <span className='text-xl font-medium text-black'>(till date)</span>
                </p>
            </div>
        </section>
    )
}