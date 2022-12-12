import Modal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import setModalOpen from '../redux/actions/modalActions'
import { Buffer } from 'buffer';
import { addToCart } from '../redux/actions/cartActions';
import setSnackbar from '../redux/actions/snackbarActions';
import { useEffect } from 'react';
import { useState } from 'react';
import ColorThief from '../utils/color-thief'



Modal.setAppElement('#root')

const MyModal = () => {

    const dispatch = useDispatch()
    const colorthief = new ColorThief()

    const isOpen = useSelector(state => state.modal.isOpen)
    const product = useSelector(state => state.modal.product)
    // const cartProducts = useSelector(state => state.modal.product)
    const loggedIn = useSelector(state => state.auth.loggedIn)
    const [result, setResult] = useState()


    const handleProductClick = () => {
        if (loggedIn) {

            dispatch(addToCart({ id: product.id }))
            dispatch(setSnackbar(true, 'info', 'Product Added to Cart!', 1000))
            dispatch(setModalOpen({ isOpen: false, product: undefined }))

        } else {
            dispatch(setSnackbar(true, 'info', 'Please login first!', 2000))
        }

    }



    const handlePick = () => {

        const img = product?.productImage
        // console.log(img);
        // if (img?.complete) {
        //     setResult(colorthief.getColor(img))

        setResult(colorthief.getColor(img))

        // } else {
        //     img.addEventListener('load', function () {
        //         setResult(colorthief.getColor(img))
        //     });
        // }

        // const image = new Image()
        // image.src = `data:image/png;base64,${Buffer.from(product.productImage).toString('base64')}`

        // image.onload((e) => {
        //     const result = colorthief.getColor(image, 25);
        //     console.log(result);
        // })

        // const result = colorthief.getColor(img, 25);

        // console.log(result)

        // return result

        // style = {
        //     background: `rgb(${result[0]}, ${result[1]}, ${result[2]})`,
        // }
    }

    useEffect(() => {
        if (product) {
            const result = colorthief.getColor(product?.productImage)
            // console.log(result);
            setResult({
                backgroundColor: `rgba(${result[0]}, ${result[1]}, ${result[2]}, 0.5)`,
                Color: `rgba(${result[0]}, ${result[1]}, ${result[2]}, 0.5)`
            })
        }
    }, [product])



    return (
        <Modal className="modal" isOpen={isOpen} onRequestClose={() => { dispatch(setModalOpen({ isOpen: false })) }}>
            {
                product && (
                    <>
                        <div style={result} className='modal-left'>
                            <img id='my-image' src={`data:image/png;base64,${Buffer.from(product.productImage).toString('base64')}`}></img>
                        </div>
                        {/* <button onClick={() => { handlePick() }}>Please Ho ja</button> */}
                        <div className='modal-right'>
                            <div className='right__info'>
                                <div style={result} className='info-title'>{product.title}</div>

                                <div className='info-subtitle'>{product.subtitle}</div>

                                <div className='info-description'>
                                    <div className='desc_title'>Description:</div>
                                    {product.description}
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
                                        ₹ {(product.amount) * (1 - ((product.discount) / 100))}
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