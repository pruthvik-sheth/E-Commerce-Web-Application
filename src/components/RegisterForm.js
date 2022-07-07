import InputField from "./InputField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import setSnackbar from "../redux/actions/snackbarActions";

const RegisterForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [statePassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false)

  const registerUser = async (event) => {
    event.preventDefault();

    const firstname = event.target.elements.firstname.value;
    const lastname = event.target.elements.lastname.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const role = event.target.elements.role.value;

    console.log(role);

    const response = await fetch("/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        role
      }),
    });

    const data = await response.json();

    if (data.success) {
      navigate("/login");
      dispatch(setSnackbar(true, 'success', data.message))
    }
    else {
      dispatch(setSnackbar(true, 'error', data.message))
    }
  };

  return (
    <div id="register_form">
      <form onSubmit={registerUser}>
        <div className="section_info">
          <div className="sub_title">Personal Information</div>
          <div className="small_alert">
            Please enter the following information to create your account.
          </div>
          <div className="side_by_side_fields">
            <div className="side_item">
              <InputField
                inputTitle="First Name *"
                inputType="text"
                inputName="firstname"
              />
            </div>
            <div className="side_item">
              <InputField
                inputTitle="Last Name *"
                inputType="text"
                inputName="lastname"
              />
            </div>
          </div>
          <InputField
            inputTitle="Email Address *"
            inputType="email"
            inputName="email"
          />


          <select name="role">
            <option value="Buyer">Select your Role</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
        </div>

        <div className="section_info">
          <div className="sub_title">Login Information</div>
          <div className="side_by_side_fields">
            <div className="side_item">
              <div id="input_field">
                <div className="input_title">Password *</div>
                <input
                  type="password"
                  name="password"
                  className="text_box"
                  value={statePassword}
                  onChange={(e) => { setPassword(e.target.value) }}
                ></input>
              </div>
            </div>
            <div className="side_item">
              <div id="input_field">
                <div className="input_title">Confirm Password *
                  {
                    flag && (statePassword && statePassword === confirmPassword ?
                      (<p>Confirmed</p>) :
                      (<p>not confirmed</p>))
                  }
                </div>
                <input
                  type="password"
                  className="text_box"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value) }}
                  onFocus={() => { setFlag(true) }}
                  onBlur={() => { setFlag(false) }}
                  name="confirmPassword"
                ></input>
              </div>

            </div>
          </div>
          {
            <input className="general_button" type="submit" value="Register" disabled={!(!flag && (statePassword && statePassword === confirmPassword))} />
          }
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
