import InputField from './InputField'

const LoginForm = () => {
    return (
        <div id="login_form">
            <div className="sub_title">Registered Customers</div>
            <p className="small_alert info_point">If you have an account with us, please log in.</p>
            <InputField inputTitle="Email Address *" />
            <InputField inputTitle="Password *" />
            <button className="general_button">Login</button>
        </div>
    )
}

export default LoginForm