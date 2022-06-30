import CartCard from '../components/CartCard'
import TitleBar from '../components/TitleBar'
import { CartProducts } from '../utils/dummyData'
import { useSelector } from 'react-redux'



const CartPage = () => {

    const cartProducts = useSelector(state => state.cart)
    const allProducts = useSelector(state => state.products)

    const extractedProducts = cartProducts.map(
        (cartProduct) => {
            return ({ ...(allProducts.find(product => cartProduct.id === product.id)), count: cartProduct.count })
        }
    )

    const total = extractedProducts.reduce((total, product) => {
        return total += ((product.amount) * (1 - (product.discount / 100)) * product.count)
    }, 0)

    console.log(extractedProducts)

    return (
        <div id='card_page'>
            <TitleBar title="Your Cart" />
            <div className="container">

                <div className='cart-left'>
                    {/* <div className="list_heading_sorting">
                        <div className="product_name">My Shopping Bag(3 items)</div>
                        <div className="sort_box">
                            <div className="small_alert">Total price: 3000</div>
                        </div>
                    </div> */}

                    <div className='cart_cards'>
                        {
                            extractedProducts.map(
                                (product) => {
                                    return (<CartCard key={product.id} product={product} />)
                                }
                            )
                        }
                    </div>
                </div>

                <div className='cart-right'>
                    <div className='summ_item summary_title'>
                        Order Summary
                    </div>

                    <div className='summ_item'>
                        <div className='summ_row'>
                            <h4>Subtotal</h4>
                            <h4>{total}</h4>
                        </div>
                        <div className='summ_row'>
                            <h4>Shipping</h4>
                            <h4>Free</h4>
                        </div>
                    </div>

                    <div className='summ_item'>
                        <div className='summ_row'>
                            <h3>Total</h3>
                            <h4>{total}</h4>
                        </div>
                    </div>
                    <button className='general_button'>Place Order</button>
                </div>

            </div>
        </div>
    )
}

export default CartPage