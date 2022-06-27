import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router';

const RecentProducts = () => {

    const navigate = useNavigate();

    const products = useSelector(state => state.products)

    return (
        <div className='product_cards'>
            <div className='cards_container'>
                <div className="list_heading_sorting">
                    <div className="cate_title">Recently Added</div>
                    <button onClick={() => navigate('/products')} className='general_button_1'>View More </button>
                </div>

                {
                    products.map(
                        (product) => {
                            return (<ProductCard key={product.id} product={product} />)
                        }
                    )
                }

            </div>
        </div>
    )
}

export default RecentProducts