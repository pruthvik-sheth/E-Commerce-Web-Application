import CategoryCard from "../components/CategoryCard"
import RecentProducts from "../components/RecentProducts"
import ProductListingPage from "./ProductListingPage"



const HomePage = () => {

    return (
        <div id="home_page">
            <div className="container">
                <div className="home_intro">
                    <div className="intro_left">
                        <div className="intro_left_title">Shop Computers<br></br> & Accessories</div>
                        <div className="intro_left_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <button className="general_button">Shop Now</button>
                    </div>
                    <div className="intro_right">
                        <img src="images/headphones_1.png"></img>
                    </div>
                </div>

                <div className="home_categories">
                    <div className="cate_title">Shop by Categories</div>
                    <div className="cate_cards">
                        <CategoryCard bgSize='70' bg='headphones.png' title='Computer & Accessories' />
                        <CategoryCard bgSize='100' bg='beauty.png' title='Beauty Picks' />
                        <CategoryCard bgSize='100' bg='vr.png' title='Video Games' />
                        <CategoryCard bgSize='80' bg='hoodie.png' title='Clothing' />
                    </div>
                </div>

                <RecentProducts />
                {/* <ProductListingPage /> */}
            </div>
        </div>
    )
}

export default HomePage