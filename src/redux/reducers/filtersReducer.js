
const initialFilterState = {
    text: '',
    sortByCategory: 'All',
    sortByAmount: 'Higher-Lower'
}

const filtersReducer = (state = initialFilterState, action) => {

    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_CATEGORY':
            return {
                ...state,
                sortByCategory: action.category
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortByAmount: action.amountHL
            }

        default:
            return state

    }
}

export default filtersReducer