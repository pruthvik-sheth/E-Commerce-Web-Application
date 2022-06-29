

const getVisibleProducts = (products, { text, sortByCategory, sortByAmount }) => {



    return products.filter(

        (product) => {

            const textMatch = product.title.toLowerCase().includes(text.toLowerCase()) || product.description.toLowerCase().includes(text.toLowerCase()) || product.category.toLowerCase().includes(text.toLowerCase())
            let sortByCategoryMatch

            if (sortByCategory == 'All') {
                sortByCategoryMatch = true
            }
            else {
                sortByCategoryMatch = product.category === sortByCategory
            }

            return textMatch && sortByCategoryMatch
        }

    ).sort(
        (a, b) => {

            if (sortByAmount == 'Higher-Lower') {
                return (a.amount * (1 - (a.discount / 100))) < (b.amount * (1 - (b.discount / 100))) ? 1 : -1
            }
            else {
                return (a.amount * (1 - (a.discount / 100))) < (b.amount * (1 - (b.discount / 100))) ? -1 : 1
            }

        }
    )

}

export default getVisibleProducts