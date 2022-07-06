import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import EditProductPage from '../pages/EditProductPage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import Footer from '../components/Footer'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

// import { HomeProducts } from "../utils/dummyData"
import { useEffect } from "react"
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import setProduct from '../redux/actions/productsActions'
import ProductListingPage from '../pages/ProductListingPage'
import { addToCart } from '../redux/actions/cartActions'

const AppRouter = () => {

  const dispatch = useDispatch()
  const getCart = async () => {

    try {
      const response = await fetch("/cart/getcart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      try {
        const data = await response.json();
        console.log(data);

        if (data.success) {
          if (!data.empty) {
            data.cart.items.forEach(
              (element) => {
                dispatch(addToCart({ id: element.item._id, fromDatabase: true, count: element.quantity }))
              }
            )
          }
        }
      }
      catch (err) {
        console.log(err);
      }

    }
    catch (err) {
      console.log(err);
    }

  }

  const getProducts = async () => {

    try {
      const response = await fetch('/product/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })

      try {
        const data = await response.json()
        console.log(data);
        // const data = HomeProducts
        // console.log(data);

        data.products.map(
          (product) => {
            dispatch(
              setProduct({
                id: product._id,
                title: product.title,
                description: product.description,
                amount: product.amount,
                discount: product.discount,
                category: product.category,
                imageSrc: product.imageSrc,
              })
            )
          }
        )
      }
      catch (err) {
        console.log(err);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProducts()
    getCart()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/login' element={<PublicRoute component={LoginPage} />} />
        <Route path='/register' element={<PublicRoute component={RegisterPage} />} />
        <Route path='/products' element={<ProductListingPage />} />
        <Route path='/edit' element={<EditProductPage />} />
        <Route path='/spare' element={<ProductPage />} />
        <Route path='/cart' element={<PrivateRoute component={CartPage} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default AppRouter

