import NavButtonBar from '../components/NavButtonBar'
import RegisterForm from '../components/RegisterForm'
import TitleBar from '../components/TitleBar'

const RegisterPage = () => {
    return (
        <div id='register_page'>
            <NavButtonBar current = 'Register' />
            <TitleBar title="Login or Create an Account" />
            <div className='container'>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage