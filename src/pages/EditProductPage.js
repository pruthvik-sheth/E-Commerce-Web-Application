import TitleBar from '../components/TitleBar'
import InputField from '../components/InputField'

const EditProductPage = () => {
    return (
        <div id='edit_product_page'>
            <TitleBar title="Edit Product" />
            <div className='container'>
                <div className="side_by_side_fields">
                    <div className='side_item'><InputField inputTitle="First Name *" /></div>
                    <div className='side_item'><InputField inputTitle="Last Name *" /></div>
                </div>
                <div className="side_by_side_fields">

                    <div className='drop_down side_item'>
                        <div className='input_title'>Shop by Categories</div>
                        <select name="cars" id="cars">
                            <option value="">Select</option>
                            <option value="Option">Option 1</option>
                            <option value="Option">Option 2</option>
                            <option value="Option">Option 3</option>
                        </select>
                    </div>
                    <div className='side_item'><InputField inputTitle="Description *" /></div>
                </div>
                <div className='upload_button_div'><input className='custom_file_input' type="file"></input></div>
                <div className='buttons'>
                    <button className="general_button">Save</button>
                    <button className="general_button">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditProductPage