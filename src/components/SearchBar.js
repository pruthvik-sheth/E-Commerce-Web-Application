
const SearchBar = () => {
    return (
        <div id="search_bar">
            <div className="container">
                <input type='text' className="text_box search_bar_item" placeholder="What are you looking for?"></input>
                <button className="general_button search_bar_item search"><img src="images/search.svg"></img><span>Search</span></button>
                <button className="general_button search_bar_item">Cancel</button>
            </div>
        </div>
    )
}

export default SearchBar