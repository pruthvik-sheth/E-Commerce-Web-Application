import Header from './components/Header'
import SearchBar from './components/SearchBar'
import NavButtonBar from './components/NavButtonBar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import EditProductPage from './pages/EditProductPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import ProductListing from './pages/ProductListingPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <NavButtonBar />
      <CartPage />
      <Footer />
    </div>
  )
}

export default App





