const InputField = (props) => {
    return (
        <div id="input_field">
            <div className="input_title">{props.inputTitle}</div>
            <input type={props.inputType} name={props.inputName} className="text_box"></input>
        </div>
    )
}

export default InputField