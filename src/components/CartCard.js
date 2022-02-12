const ProductCard = () => {
    return (
        <div id='cart_card'>
            <div className="cart_image_container">
                <div className="cart_image"></div>
            </div>

            <div className="cart_info_box">

                <div className="cart_top">
                    <div className="cart_row">
                        <div className="cart_title">Product Title</div>
                        <div className="cart_price">₹ 500</div>
                    </div>
                    <div className="cart_row">
                        <div className="cart_item_name small_alert">Cart item name</div>
                        <div className="cart_discount">
                            <div className="eliminated_price">MRP ₹<span>1000</span></div>
                            <div className="percent_off">50% OFF</div>
                        </div>
                    </div>
                </div>
                <div className="cart_row">
                    <div className="cart_row">
                        <div className="counter">
                            <button className="counter_button">+</button>
                            <div className="counter_num">1</div>
                            <button className="counter_button">-</button>
                        </div>
                        <div>
                            <button className="nav_button">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard