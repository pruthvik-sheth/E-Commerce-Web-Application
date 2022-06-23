import { Link } from 'react-router-dom';

const NavButtonBar = (props) => {
    return (
        <div id="nav_button_bar">
            <Link to='/' className="nav_button nav_button_bar_item">Home</Link>
            <img className="nav_button_bar_item" src="images/breadcrumb-arrow.svg"></img>
            <button className="nav_button nav_button_bar_item">{props.current}</button>
        </div>
    )
}

export default NavButtonBar