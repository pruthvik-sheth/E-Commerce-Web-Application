import TitleBar from '../components/TitleBar'
import ProductBar from '../components/ProductBar'
import { TablePagination } from '@material-ui/core'
import { ListProducts } from '../utils/dummyData'


const ProductPage = () => {
    return (
        <div id='product_page'>
            <TitleBar title="Product page" />
            <div className='container'>
                <div className='search_product'>
                    <input className='text_box' type='text' placeholder='Search...'></input>
                    <button className="general_button">Add Product</button>
                </div>

                <div className='product_bar'>
                    <div className='product_info'>
                        <div className='product_info_item boldy'>id</div>
                        <div className='product_info_item boldy'>Titulo</div>
                        <div className='product_info_item boldy'>Fonte De Dasos</div>
                        <div className='product_info_item boldy'>Query</div>
                    </div>
                    <div className='product_edit_buttons'>
                    </div>
                </div>

                {
                    ListProducts.map(
                        (product) => {
                            return (<ProductBar key={product.id} product = {product}/>)
                        }
                    )
                }

                <div className='table_pagination_box'>
                    <TablePagination
                        component="div"
                        count={6}
                        rowsPerPage={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductPage