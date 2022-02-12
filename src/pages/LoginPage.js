import LoginContent from '../components/LoginContent'
import LoginForm from '../components/LoginForm'
import TitleBar from '../components/TitleBar'

const LoginPage = () => {
    return (
        <div>
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