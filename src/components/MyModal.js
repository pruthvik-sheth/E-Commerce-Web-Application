import Modal from 'react-modal'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import setModalOpen from '../redux/actions/modalActions'
import { Buffer } from 'buffer';
import { addToCart } from '../redux/actions/cartActions';
import setSnackbar from '../redux/actions/snackbarActions';


Modal.setAppElement('#root')

const MyModal = () => {

    // const [result, setResult] = useState()


    const dispatch = useDispatch()

    const isOpen = useSelector(state => state.modal.isOpen)
    const productId = useSelector(state => state.modal.productId)
    const products = useSelector(state => state.products)
    const loggedIn = useSelector(state => state.auth.loggedIn)

    const foundProduct = products.find(product => product.id === productId)

    const imageRef = React.createRef()


    const handleProductClick = () => {
        if (loggedIn) {

            dispatch(addToCart({ id: foundProduct.id }))
            dispatch(setSnackbar(true, 'info', 'Product Added to Cart!', 1000))

        } else {
            dispatch(setSnackbar(true, 'info', 'Please login first!', 2000))
            // navigate('/cart')
        }

    }

    // let hello, style

    // const handlePick = () => {
    //     const colorthief = new ColorThief()

    //     const img = imageRef.current;
    //     const result = colorthief.getColor(img, 25);

    //     setResult(result)

    //     // return result

    //     // style = {
    //     //     background: `rgb(${result[0]}, ${result[1]}, ${result[2]})`,
    //     // }
    // }



    return (
        <Modal className="modal" isOpen={isOpen} onRequestClose={() => { dispatch(setModalOpen({ isOpen: false })) }}>
            {
                foundProduct && (
                    <>
                        <div className='modal-left'>
                            <img src={`data:image/png;base64,${Buffer.from(foundProduct.productImage).toString('base64')}`}></img>
                        </div>
                        <div className='modal-right'>
                            <div className='right__info'>
                                <div className='info-title'>{foundProduct.title}</div>

                                <div className='info-subtitle'>{foundProduct.subtitle}</div>

                                <div className='info-description'>
                                    <div className='desc_title'>Description:</div>
                                    {foundProduct.description}
                                </div>

                                <div className="cart_sec cart_sec_2">
                                    <div className="counter">
                                        <div className='desc_title'>Quantity: </div>
                                        <button className="counter_button">+</button>
                                        <div className="counter_num">0</div>

                                        <button className="counter_button">-</button>

                                    </div>
                                </div>

                                <div className='info-bottom'>
                                    <div className='info-price'>
                                        ₹ {(foundProduct.amount) * (1 - ((foundProduct.discount) / 100))}
                                    </div>
                                    <button onClick={handleProductClick} className='general_button'>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </Modal >
    )
}

export default MyModal