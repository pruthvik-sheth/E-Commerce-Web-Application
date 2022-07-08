import { Link } from 'react-router-dom';
import { useSelector } from "react-redux/es/exports"
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { useNavigate } from 'react-router';
import { logout } from '../redux/actions/authActions';
import { setTextFilter } from '../redux/actions/filtersActions';
import setSnackbar from '../redux/actions/snackbarActions';
import { emptyCart } from '../redux/actions/cartActions';
import setModalOpen from '../redux/actions/modalActions';

const Header = () => {



    const { loggedIn, userName, role } = useSelector(state => ({ loggedIn: state.auth.loggedIn, userName: state.auth.userName, role: state.auth.role }))
    const filters = useSelector(state => state.filters)
    const cartProducts = useSelector(state => state.cart)

    const cartTotal = cartProducts.reduce((total, product) => {
        return total = total + product.count
    }, 0)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const updateServerCart = async () => {

        const toSendProducts = cartProducts.map(
            (product) => {
                return { item: product.id, quantity: product.count }
            }
        )
        console.log(toSendProducts);

        const response = await fetch("/cart/addcart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: toSendProducts
            }),
        });

        const data = await response.json();

        console.log(data);
    }

    const handleLogout = async () => {


        updateServerCart()


        dispatch(emptyCart())

        try {
            const response = await fetch('/user/logout', { method: 'GET', credentials: 'include' })

            const data = await response.json()

            if (data.success) {
                dispatch(logout())
                dispatch(setSnackbar(true, 'info', data.message))
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    // window.addEventListener('beforeunload', (event) => {
    //     // Cancel the event as stated by the standard.
    //     event.preventDefault();
    //     // Chrome requires returnValue to be set.
    //     event.returnValue = '';

    //     updateServerCart()
    // });



    return (
        <header>
            <nav>
                <div className="container">

                    <div className="logo">
                        <Link to='/'><img src="images/site-logo.svg"></img></Link>
                    </div>

                    <div className="nav_items">
                        <input
                            type='text'
                            value={filters.text}
                            onChange={(e) => {
                                dispatch(setTextFilter(e.target.value))
                            }}
                            className="text_box search_bar_item nav_item"
                            placeholder="Search Products"></input>
                        {/* <button onClick={() => { navigate('/spare') }} className="nav_button nav_item general_button">Edit Product</button> */}

                        {
                            loggedIn ? (

                                <>
                                    <p className='nav_item'>Hello, <span>{userName}</span></p>
                                    {
                                        role === 'Seller' && <button onClick={() => { navigate('/edit', { state: { isEdit: true, product: {} } }) }} className="nav_button nav_item general_button">Add Product</button>
                                    }
                                    <button onClick={handleLogout} className="nav_button nav_item general_button">Logout</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => navigate('/login')} className="nav_button nav_item general_button">Login</button>
                                    <button onClick={() => navigate('/register')} className="nav_button nav_item general_button">Register</button>
                                </>
                            )
                        }
                        <button onClick={() => navigate('/cart')} className="nav_button nav_button_1 nav_item"><img src="images/cart.svg"></img><div className='cart_count'>{cartTotal}</div></button>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header