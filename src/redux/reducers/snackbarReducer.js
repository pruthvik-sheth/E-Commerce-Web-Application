
const initialSnackState = {
    snackbarOpen: false,
    snackbarType: 'success',
    snackbarMessage: '',
    snackbarAlive: 4000
}

const snackbarReducer = (state = initialSnackState, action) => {

    switch (action.type) {

        case 'SET_SNACKBAR':
            const { snackbarOpen, snackbarType, snackbarMessage, snackbarAlive } = action;

            return {
                ...state,
                snackbarOpen,
                snackbarType,
                snackbarMessage,
                snackbarAlive
            }

        default:
            return state

    }

}

export default snackbarReducer