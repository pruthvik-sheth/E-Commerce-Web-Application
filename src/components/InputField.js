const InputField = (props) => {
    return (

        <div id="input_field">
            <div className="input_title">{props.inputTitle}</div>
            <input 
                type={props.inputType} 
                name={props.inputName} 
                className="text_box"
                value = {props.inputValue}
                onChange = {props.onChange}
                required ></input>
        </div>
    )
}

export default InputField