import { useNavigate } from 'react-router';

const LoginContent = () => {

    const navigate = useNavigate();

    return (
        <div id="login_content">
            <div className="sub_title">New Customer</div>
            <p className="small_alert info_point">Registration is free and easy</p>
            <ul>
                <li className="info_point">Faster checkout</li>
                <li className="info_point">Save multiple shipping addresses</li>
                <li className="info_point">View and track orders and more</li>
                <button onClick={() => navigate('/register')} className="general_button">Create an Account</button>
               
            </ul>
        </div>
    )
}

export default LoginContent

// Using react router link removes styling from the button somehow 
//Instead using the react navigate hook