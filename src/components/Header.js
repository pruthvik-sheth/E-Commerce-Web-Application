
const Header = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="logo">
                        <img src="images/site-logo.svg"></img>
                    </div>
                    <div className="nav_items">
                        <button className="nav_button nav_item">Login</button>
                        <div className="null nav_item"></div>
                        <button className="nav_button nav_item">Register</button>
                        <button className="nav_button nav_button_1 nav_item"><img src="images/cart.svg"></img><span>0</span>Cart</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header