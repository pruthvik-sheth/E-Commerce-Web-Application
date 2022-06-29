
const initialSnackState = {
    snackbarOpen: false,
    snackbarType: 'success',
    snackbarMessage: ''
}

const snackbarReducer = (state = initialSnackState, action) => {

    switch (action.type) {

        case 'SET_SNACKBAR':
            const { snackbarOpen, snackbarType, snackbarMessage } = action;

            return {
                ...state,
                snackbarOpen,
                snackbarType,
                snackbarMessage
            }

        default:
            return state

    }

}

export default snackbarReducer