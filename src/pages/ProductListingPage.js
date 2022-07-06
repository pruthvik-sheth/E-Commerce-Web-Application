import ProductCard from '../components/ProductCard'
import TitleBar from '../components/TitleBar'
import { Pagination } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme'
import { useSelector, useDispatch } from 'react-redux'
import getVisibleProducts from '../redux/selectors/productsSelector'
import { sortByCategory } from '../redux/actions/filtersActions'


const ProductListingPage = () => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)
    console.log(products);

    const filters = useSelector(state => state.filters)

    // console.log(filters);

    const filteredProducts = getVisibleProducts(products, filters)



    // console.log(products);
    return (
        <div id='product_listing_page'>
            <TitleBar title="Product Listing" />
            <div className='container'>

                {
                    filteredProducts.length !== 0 ? (

                        <>
                            <div className="list_heading_sorting">
                                <div className="product_name">Total Products: {filteredProducts.length} items</div>
                                <div className="sort_box">
                                    <div className="small_alert">Sort By</div>
                                    <select
                                        onChange={
                                            (e) => {
                                                dispatch(sortByCategory(e.target.value))
                                            }
                                        }

                                        value={filters.sortByCategory}
                                    >
                                        <option value="All">All</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Beauty">Beauty</option>
                                        <option value="Lifestyle">Lifestyle</option>
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
                        </>
                    ) : (
                        <div className='empty_image'><img src='/images/girl-empty.gif'></img></div>
                    )
                }


            </div>

            <ThemeProvider theme={theme}>
                <Pagination count={10} color="primary" />
            </ThemeProvider>

        </div>
    )
}

export default ProductListingPage




