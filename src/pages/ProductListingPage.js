import ProductCard from '../components/ProductCard'
import TitleBar from '../components/TitleBar'
import { Pagination } from '@material-ui/lab'
import { ThemeProvider } from '@material-ui/core'
import theme from '../theme'


const ProductListingPage = () => {
    return (
        <div id='product_listing_page'>
            <TitleBar title="Product Listing" />
            <div className="container">
                <div className="list_heading_sorting">
                    <div className="product_name">Product Name - 1466 items</div>
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
                        <ProductCard number="800" />
                        <ProductCard number="800" />
                        <ProductCard number="800" />
                        <ProductCard number="800" />
                        <ProductCard number="800" />
                        <ProductCard number="800" />
                        <ProductCard number="800" />
                        <ProductCard number="800" />
                    </div>
                </div>

                <ThemeProvider theme={theme}>
                    <Pagination count={10} color="primary" />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default ProductListingPage