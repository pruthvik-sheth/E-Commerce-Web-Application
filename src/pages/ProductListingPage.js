import ProductCard from '../components/ProductCard'
import TitleBar from '../components/TitleBar'
import { Pagination } from '@material-ui/lab'
import { ThemeProvider } from '@material-ui/core'
import theme from '../theme'
import { useSelector } from 'react-redux'
import getVisibleProducts from '../redux/actions/selectors/productsSelector'


const ProductListingPage = () => {

    const products = useSelector(state => state.products)

    const filters = useSelector(state => state.filters)

    // console.log(filters);

    const filteredProducts = getVisibleProducts(products, filters)

    // console.log(products);
    return (
        <div id='product_listing_page'>
            <TitleBar title="Product Listing" />
            <div className='container'>
                <div className="list_heading_sorting">
                    <div className="product_name">Total Products: {filteredProducts.length} items</div>
                    <div className="sort_box">
                        <div className="small_alert">Sort By</div>
                        <select name="cars" id="cars">
                            <option value="a">a-z</option>
                            <option value="b">Option 1</option>
                            <option value="c">Option 2</option>
                            <option value="d">Option 3</option>
                        </select>
                    </div>
                </div>

                <div className='product_cards'>
                    <div className='cards_container'>
                        {
                            filteredProducts.map(
                                (product) => {
                                    return (<ProductCard key={product.id} product={product} />)
                                }
                            )
                        }

                    </div>
                </div>
            </div>

            <ThemeProvider theme={theme}>
                <Pagination count={10} color="primary" />
            </ThemeProvider>

        </div>
    )
}

export default ProductListingPage




