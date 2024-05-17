import './App.css'
import { Header } from './components'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from './utils/appRoutes';
import { Categories, Expenses } from './pages';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className='container mx-auto'>
          <Routes>
            <Route path={appRoutes.expense.path} element={<Expenses />} />
            <Route path={appRoutes.category.path} element={<Categories />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  )
}

export default App
