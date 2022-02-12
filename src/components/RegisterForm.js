import InputField from './InputField'

const RegisterForm = () => {
    return (
        <div id="register_form">
            <div className='section_info'>
                <div className="sub_title">Personal Information</div>
                <div className='small_alert'>Please enter the following information to create your account.</div>
                <div className="side_by_side_fields">
                    <div className='side_item'><InputField inputTitle="First Name *" /></div>
                    <div className='side_item'><InputField inputTitle="Last Name *" /></div>

                </div>
                <InputField inputTitle="Email Address *" />
            </div>

            <div className='section_info'>
                <div className="sub_title">Login Information</div>
                <div className="side_by_side_fields">
                    <div className='side_item'><InputField inputTitle="Password *" /></div>
                    <div className='side_item'><InputField inputTitle="Confirm Password *" /></div>
                </div>
                <button className="general_button">Register</button>
            </div>
        </div>
    )
}

export default RegisterForm