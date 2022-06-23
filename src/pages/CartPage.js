import CartCard from '../components/CartCard'
import TitleBar from '../components/TitleBar'
import { CartProducts } from '../utils/dummyData'

const CartPage = () => {
    return (
        <div id='card_page'>
            <TitleBar title="Cart" />
            <div className="container">
                <div className="list_heading_sorting">
                    <div className="product_name">My Shopping Bag(3 items)</div>
                    <div className="sort_box">
                        <div className="small_alert">Total price: 3000</div>
                    </div>
                </div>

                <div className='cart_cards'>
                    {
                        CartProducts.map(
                            (product) => {
                                return (<CartCard key={product.id} product={product} />)
                            }
                        )
                    }
                </div>
                <button className='general_button'>Place Order</button>
            </div>
        </div>
    )
}

export default CartPage