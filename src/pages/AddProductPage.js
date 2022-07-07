import TitleBar from '../components/TitleBar'
import InputField from '../components/InputField'

const EditProductPage = () => {

    const handleSubmit = async () => {

    }


    return (
        <div id='edit_product_page'>
            <TitleBar title="Add Product" />
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="side_by_side_fields">
                        <div className='side_item'><InputField inputTitle="Product Title *" /></div>
                        <div className='side_item'><InputField inputTitle="Product Subtitle*" /></div>
                    </div>
                    <div className="side_by_side_fields">

                        <div className='drop_down side_item'>
                            <div className='input_title'>Product Category</div>
                            <select name="cars" id="cars">
                                <option value="">Select</option>
                                <option value="Option">Lifestyle</option>
                                <option value="Option">Electronics</option>
                                <option value="Option">Beauty</option>
                                <option value="Option">Books</option>
                            </select>
                        </div>
                        <div className='side_item'><InputField inputTitle="Description *" /></div>
                    </div>
                    <div className='upload_button_div'><input name='image' className='custom_file_input' type="file"></input></div>
                    <div className='buttons'>
                        <button className="general_button">Save</button>
                        <button className="general_button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProductPage