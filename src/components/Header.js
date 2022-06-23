import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="logo">
                        <Link to='/'><img src="images/site-logo.svg"></img></Link>
                    </div>
                    <div className="nav_items">
                        <Link to='/login' className="nav_button nav_item">Login</Link>
                        <div className="null nav_item"></div>
                        <Link to='/register' className="nav_button nav_item">Register</Link>
                        <Link style={{ textDecoration: 'none' }} to='/cart' className="nav_button nav_button_1 nav_item"><img src="images/cart.svg"></img><span>0</span>Cart</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header