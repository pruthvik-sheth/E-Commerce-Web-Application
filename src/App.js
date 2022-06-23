import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import EditProductPage from './pages/EditProductPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <SearchBar />
      <Routes>
        <Route path='/' exact={true} element={<HomePage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/edit' element={<EditProductPage />}/>
        <Route path='/products' element={<ProductPage />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
