import { Link } from 'react-router-dom';
import { useSelector } from "react-redux/es/exports"
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { useNavigate } from 'react-router';
import { logout } from '../redux/actions/authActions';

const Header = () => {
    const { loggedIn, userName } = useSelector(state => ({ loggedIn: state.auth.loggedIn, userName: state.auth.userName }))

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {
            const response = await fetch('/user/logout', { method: 'GET', credentials: 'include' })

            const data = await response.json()

            if (data.success) {
                dispatch(logout())
            }
        }
        catch (err) {
            console.log(err);
        }
    }



    return (
        <header>
            <nav>
                <div className="container">
                    <div className="logo">
                        <Link to='/'><img src="images/site-logo.svg"></img></Link>
                    </div>

                    <div className="nav_items">
                        <input type='text' className="text_box search_bar_item nav_item" placeholder="Search Products"></input>
                        {
                            loggedIn ? (
                                <>
                                    <p className='nav_item'>Hello, <span>{userName}</span></p>
                                    <button onClick={handleLogout} className="nav_button nav_item general_button">Logout</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => navigate('/login')} className="nav_button nav_item general_button">Login</button>
                                    <button onClick={() => navigate('/register')} className="nav_button nav_item general_button">Register</button>
                                </>
                            )
                        }
                        <button onClick={() => navigate('/cart')} className="nav_button nav_button_1 nav_item"><img src="images/cart.svg"></img><div className='cart_count'>5</div></button>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header