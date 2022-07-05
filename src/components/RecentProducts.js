import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { sortByCategory } from '../redux/actions/filtersActions';

const RecentProducts = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const products = useSelector(state => state.products)

    const onlyTenProducts = products.slice(0, 5)


    return (
        <div className='product_cards'>
            <div className='cards_container'>
                <div className="list_heading_sorting">
                    <div className="cate_title">Recently Added</div>
                    <button onClick={() => {
                        navigate('/products')
                        dispatch(sortByCategory('All'))
                    }}
                        className='general_button_1'
                    >View More </button>
                </div>

                {
                    onlyTenProducts.map(
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