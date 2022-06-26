import InputField from './InputField'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { login } from '../redux/actions/authActions'

const LoginForm = () => {

    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        
        // Preventing Browser from reloading
        e.preventDefault()

        // Dispatching login action to the store
        dispatch(login( { loggedIn: true, userId: 'myId' } ))
        
    }

    return (
        <div id="login_form">

            <div className="sub_title">Registered Customers</div>
            <p className="small_alert info_point">If you have an account with us, please log in.</p>

            <form onSubmit={handleLogin}>
                <InputField inputTitle="Email Address *" inputType="email" inputName="email" />
                <InputField inputTitle="Password *" inputType="password" inputName="password"/>

                <button className="general_button" type='submit'>Login</button>
            </form>
            
        </div>
    )
}

export default LoginForm


// Preparing Request Object
        // const reqObj = {
        //     method: 'POST',
        //     url: 'login',
        //     body: {
        //         email: e.target.elements.email.value,
        //         password: e.target.elements.password.value
        //     }
        // }

        // // Sending Request obj and retrieving data response
        // try{
        //     const { data } = await fetchingHandler(reqObj)
        // }
        // catch{

        // }
