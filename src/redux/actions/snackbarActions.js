

const setSnackbar = (snackbarOpen, snackbarType = 'success', snackbarMessage = '') => ({

    type: 'SET_SNACKBAR',
    snackbarOpen,
    snackbarType,
    snackbarMessage

})

export default setSnackbar