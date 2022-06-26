


const CategoryCard = (props) => {

    const style = {
        backgroundImage: `url('images/${props.bg}')`,
        backgroundSize: `${props.bgSize}%`,
    }

    return (
        <div className="category_card">
            <div style={style} className="card_image"></div>
            <div className="card_title">{props.title}</div>
        </div>
    )
}

export default CategoryCard