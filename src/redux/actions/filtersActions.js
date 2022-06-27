

export const setTextFilter = (text = '') => ({

    type: 'SET_TEXT_FILTER',
    text

})

export const sortByCategory = (category = '') => ({

    type: 'SORT_BY_CATEGORY',
    category

})

export const sortByAmount = (amountHL = '') => ({

    type: 'SORT_BY_AMOUNT',
    amountHL

})