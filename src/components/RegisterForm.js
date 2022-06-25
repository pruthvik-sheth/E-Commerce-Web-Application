import InputField from './InputField'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {

    const navigate = useNavigate()
    
    const registerUser = async (event)=>{
        event.preventDefault()

        const firstname = event.target.elements.firstname.value
        const lastname = event.target.elements.lastname.value
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value

        const response = await fetch('http://localhost:5000/user/register',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                firstname,
                lastname,
                email,
                password
            })
        })

        const data = await response.json()

        if(data.success){
            navigate('/login')
        }
    }

    return (
        <div id="register_form">
            <form onSubmit={registerUser}>
                <div className='section_info'>
                    <div className="sub_title">Personal Information</div>
                    <div className='small_alert'>Please enter the following information to create your account.</div>
                    <div className="side_by_side_fields">
                        <div className='side_item'>
                            <InputField 
                                inputTitle="First Name *" 
                                inputType="text" 
                                inputName="firstname"
                            />
                        </div>
                        <div className='side_item'>
                            <InputField 
                                inputTitle="Last Name *" 
                                inputType="text" 
                                inputName="lastname"
                            />
                        </div>

                    </div>
                    <InputField 
                        inputTitle="Email Address *" 
                        inputType = "email"
                        inputName = "email"
                    />
                </div>

                <div className='section_info'>
                    <div className="sub_title">Login Information</div>
                    <div className="side_by_side_fields">
                        <div className='side_item'>
                            <InputField 
                                inputTitle="Password *" 
                                inputType="password" 
                                inputName="password"
                            />
                        </div>
                        <div className='side_item'>
                            <InputField 
                                inputTitle="Confirm Password *"
                                inputType="password"     
                            />
                        </div>
                    </div>
                    <input className="general_button" type='submit' value="Register"/>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm