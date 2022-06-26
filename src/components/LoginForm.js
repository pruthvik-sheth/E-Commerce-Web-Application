import InputField from './InputField'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { login } from '../redux/actions/authActions'

const LoginForm = () => {

    const dispatch = useDispatch()

    const handleLogin = async (event) => {
        
        // Preventing Browser from reloading
        event.preventDefault()

        const email = event.target.elements.email.value
        const password = event.target.elements.password.value

        const response = await fetch('/user/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email,
                password
            })
        })

        

        try {
            const data = await response.json()
            console.log(data)

            // Dispatching login action to the store
            dispatch(login( { loggedIn: true, userId: data.user.firstName } ))
        }
        catch (err){
            console.log(err);
        }
        
        

        
        
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





