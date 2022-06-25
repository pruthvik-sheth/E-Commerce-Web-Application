import InputField from './InputField'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    
    const navigate = useNavigate()

    const loginUser = async (event) =>{
        event.preventDefault()

        const email = event.target.elements.email.value
        const password = event.target.elements.password.value

        const response = await fetch('http://localhost:5000/user/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()
        
        console.log(data)

        if(data.success){
            navigate('/')
        }

    }

    return (
        <div id="login_form">

            <div className="sub_title">Registered Customers</div>
            <p className="small_alert info_point">If you have an account with us, please log in.</p>

            <form onSubmit={loginUser}>
                <InputField inputTitle="Email Address *" inputType="email" inputName="email" />
                <InputField inputTitle="Password *" inputType="password" inputName="password"/>
                <input className="general_button" type='submit' value='login'/>
            </form>

        </div>
    )
}

export default LoginForm