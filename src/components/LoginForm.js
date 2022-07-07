import InputField from './InputField'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { login } from '../redux/actions/authActions'
import setSnackbar from '../redux/actions/snackbarActions'
import { addToCart } from '../redux/actions/cartActions'



const LoginForm = () => {


    const dispatch = useDispatch()

    const getCart = async () => {

        try {
            const response = await fetch("/cart/getcart", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            try {
                const data = await response.json();
                console.log(data);

                if (data.success) {
                    if (!data.empty) {
                        data.cart.items.forEach(
                            (element) => {
                                dispatch(addToCart({ id: element.item._id, fromDatabase: true, count: element.quantity }))
                            }
                        )
                    }
                }
            }
            catch (err) {
                console.log(err);
            }

        }
        catch (err) {
            console.log(err);
        }

    }

    const handleLogin = async (event) => {

        // Preventing Browser from reloading
        event.preventDefault()

        const email = event.target.elements.email.value
        const password = event.target.elements.password.value

        const response = await fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        try {
            const data = await response.json()
            console.log(data)


            if (data.success) {

                // Dispatching login action to the store
                dispatch(setSnackbar(true, 'success', data.message))
                dispatch(login({ loggedIn: true, userName: data.userName, role: data.role }))
                getCart()

            }
            else {
                dispatch(setSnackbar(true, 'error', data.message))
            }

        }
        catch (err) {
            console.log(err);
        }



    }

    return (
        <div id="login_form">

            <div className="sub_title">Registered Customers</div>
            <p className="small_alert info_point">If you have an account with us, please log in.</p>

            <form onSubmit={handleLogin}>

                <InputField inputTitle="Email Address *" inputType="email" inputName="email" />
                <InputField inputTitle="Password *" inputType="password" inputName="password" />

                <button className="general_button" type='submit'>Login</button>

            </form>

        </div>
    )
}

export default LoginForm





