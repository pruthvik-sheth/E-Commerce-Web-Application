import LoginContent from '../components/LoginContent'
import LoginForm from '../components/LoginForm'
import NavButtonBar from '../components/NavButtonBar'
import TitleBar from '../components/TitleBar'


const LoginPage = () => {
    return (
        <div>
            <NavButtonBar current = 'Login' />
            <TitleBar title="Login or Create an Account" />
            <section id="login_page">
                <div className="container">
                    <LoginContent />
                    <LoginForm />
                </div>
            </section>
        </div>
    )
}

export default LoginPage