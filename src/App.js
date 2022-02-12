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





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
