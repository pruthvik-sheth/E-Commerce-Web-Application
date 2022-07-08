import TitleBar from '../components/TitleBar'
import InputField from '../components/InputField'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import setSnackbar from '../redux/actions/snackbarActions'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const EditProductPage = () => {

    const location = useLocation()

    const { isEdit = false, product } = location.state
    console.log(isEdit);
    console.log(product);

    const [title, setTitle] = useState(product?.title ?? '')
    const [subtitle, setSubtitle] = useState(product?.subtitle ?? '')
    const [description, setDescription] = useState(product?.description ?? '')
    const [category, setCategory] = useState(product?.category ?? '')
    const [amount, setAmount] = useState(product?.amount ?? '')
    const [discount, setDiscount] = useState(product?.discount ?? '')
    const [image, setImage] = useState(null)




    const dispatch = useDispatch()

    const handleSubmit = async (event) => {

        // Preventing Browser from reloading
        event.preventDefault()

        const title = event.target.elements.title.value
        const subtitle = event.target.elements.subtitle.value
        const description = event.target.elements.description.value
        const amount = event.target.elements.amount.value
        const discount = event.target.elements.discount.value
        const category = event.target.elements.category.value
        const image = event.target.elements.image.files[0]


        const formData = new FormData();
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('description', description);
        formData.append('amount', amount);
        formData.append('discount', discount);
        formData.append('category', category);
        image && formData.append('image', image);



        console.log(formData);

        const response = await fetch('/product/addproduct', {
            method: 'POST',
            body: formData
        })

        try {
            const data = await response.json()
            console.log(data)


            if (data.success) {

                // Dispatching login action to the store
                dispatch(setSnackbar(true, 'success', data.message))

            }
            else {
                dispatch(setSnackbar(true, 'error', data.message))
            }

        }
        catch (err) {
            console.log(err);
        }

    }


    return (
        <div id='edit_product_page'>
            <TitleBar title="Add Product" />
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="side_by_side_fields">
                        <div className='side_item'><InputField onChange={e => setTitle(e.target.value)} inputValue={title} inputType="text" inputName="title" inputTitle="Product Title *" /></div>
                        <div className='side_item'><InputField onChange={e => setSubtitle(e.target.value)} inputValue={subtitle} inputType="text" inputName="subtitle" inputTitle="Product Subtitle*" /></div>
                    </div>
                    <div className="side_by_side_fields">
                        <div className='side_item'><InputField onChange={e => setAmount(e.target.value)} inputValue={amount} inputType="number" inputName="amount" inputTitle="Product Amount *" /></div>
                        <div className='side_item'><InputField onChange={e => setDiscount(e.target.value)} inputValue={discount} inputType="number" inputName="discount" inputTitle="Product Discount*" /></div>
                    </div>
                    <div className="side_by_side_fields">

                        <div className='drop_down side_item'>
                            <div className='input_title'>Product Category</div>
                            <select onChange={e => setCategory(e.target.value)} value={category} name="category">
                                <option value="">Select</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Books">Books</option>
                            </select>
                        </div>
                        <div className='side_item'><InputField onChange={e => setDescription(e.target.value)} inputValue={description} inputType="text" inputName="description" inputTitle="Description *" /></div>
                    </div>
                    <div className='upload_button_div'><input name='image' className='custom_file_input' type="file"></input></div>
                    <div className='buttons'>
                        <button type='submit' className="general_button">Save</button>
                        <button className="general_button">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProductPage