import { useNavigate } from 'react-router';

const ProductCard = (props) => {

    const navigate = useNavigate()

    const discount = props.product.discount
    const amount = props.product.amount
    const price = amount * (1 - (discount / 100))

    return (
        <div id='product_card'>
            <div className="product_image"></div>

            <div className="product_info_box">
                <div className="product_title">{props.product.title}</div>
                <div className="product_desc">{props.product.description}</div>
                <div className="product_discount">
                    <div className="eliminated_price">MRP ₹<span>{amount}</span></div>
                    <div className="percent_off">{discount}% OFF</div>
                </div>
                <div className="product_lower">
                    <div className="product_price">₹ {price}</div>
                    <button onClick={() => { navigate('/cart') }} className="general_button_2">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard