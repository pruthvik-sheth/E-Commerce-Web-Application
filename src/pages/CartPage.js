import CartCard from '../components/CartCard'
import TitleBar from '../components/TitleBar'


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
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
                <button className='general_button'>Place Order</button>
            </div>
        </div>
    )
}

export default CartPage