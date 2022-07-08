import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import setSnackbar from '../redux/actions/snackbarActions';
import { Buffer } from 'buffer';
import setModalOpen from '../redux/actions/modalActions';

const ProductCard = (props) => {

    const { id, title, subtitle, amount, discount, productImage } = props.product

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const price = amount * (1 - (discount / 100))

    const style = {
        backgroundImage: `url('data:image/png;base64,${Buffer.from(productImage).toString('base64')}')`,
        // backgroundSize: `${props.bgSize}%`,
    }

    const loggedIn = useSelector(state => state.auth.loggedIn)

    const handleProductClick = () => {
        if (loggedIn) {

            dispatch(addToCart({ id: id }))
            dispatch(setSnackbar(true, 'info', 'Product Added to Cart!', 1000))

        } else {
            dispatch(setSnackbar(true, 'info', 'Please login first!', 2000))
            navigate('/cart')
        }

    }

    return (
        <div onClick={() => { dispatch(setModalOpen({ isOpen: true, product: props.product })) }} id='product_card'>
            <div style={style} className="product_image"></div>

            <div className="product_info_box">
                <div className="product_title">{title}</div>
                <div className="product_desc">{subtitle}</div>
                <div className="product_discount">
                    <div className="eliminated_price">MRP ₹<span>{amount}</span></div>
                    <div className="percent_off">{discount}% OFF</div>
                </div>
                <div className="product_lower">
                    <div className="product_price">₹ {price}</div>
                    {/* <button onClick={handleProductClick} className="general_button_2">Add to Cart</button> */}
                </div>
            </div>
        </div>
    )
}

export default ProductCard


