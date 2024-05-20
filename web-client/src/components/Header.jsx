import { Link } from "react-router-dom"
import { appRoutes } from "../utils/appRoutes"

export const Header = () => {

    const renderLink = (route) => {
        return (
            <li><Link to={route.path} className="text-base font-medium hover:font-semibold hover:underline ease-out transition duration-200">{route.name}</Link></li>
        )
    }

    return (
        <header className="container px-4 py-6 mx-auto shadow-md mb-4 bg-emerald-300">
            <nav className="flex items-center justify-between font-bold text-xl">
                <h4>Expense Manager</h4>
                <ul className="list-none flex gap-5 justify-end items-center" >
                    {renderLink(appRoutes.home)}
                    {renderLink(appRoutes.expense)}
                    {renderLink(appRoutes.category)}
                </ul>
            </nav>
        </header>
    )
}