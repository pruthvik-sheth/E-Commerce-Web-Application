import CategoryCard from "../components/CategoryCard"
import RecentProducts from "../components/RecentProducts"
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { sortByCategory } from "../redux/actions/filtersActions";



const HomePage = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    return (
        <div id="home_page">
            <div className="container">
                <div className="home_intro">
                    <div className="intro_left">
                        <div className="intro_left_title">Shop Computers<br></br> & Accessories</div>
                        <div className="intro_left_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <button onClick={() => {
                            navigate('/products')
                            dispatch(sortByCategory('Electronics'))

                        }} className="general_button">Shop Now</button>
                    </div>
                    <div className="intro_right">
                        <img src="images/headphones_1.png"></img>
                    </div>
                </div>

                <div className="home_categories">
                    <div className="cate_title">Shop by Categories</div>
                    <div className="cate_cards">
                        <button onClick={() => {
                            navigate('/products')
                            dispatch(sortByCategory('Electronics'))

                        }}>
                            <CategoryCard bgSize='70' bg='headphones.png' title='Computer & Accessories' />
                        </button>

                        <button onClick={() => {
                            navigate('/products')
                            dispatch(sortByCategory('Beauty'))

                        }}>
                            <CategoryCard bgSize='100' bg='beauty.png' title='Beauty Picks' />
                        </button>

                        <button onClick={() => {
                            navigate('/products')
                            dispatch(sortByCategory('Electronics'))

                        }}>
                            <CategoryCard bgSize='100' bg='vr.png' title='Video Games' />
                        </button>

                        <button onClick={() => {
                            navigate('/products')
                            dispatch(sortByCategory('Clothes'))

                        }}>
                            <CategoryCard bgSize='80' bg='hoodie.png' title='Life Style' />
                        </button>


                    </div>
                </div>

                <RecentProducts />
                {/* <ProductListingPage /> */}
            </div>
        </div>
    )
}

export default HomePage