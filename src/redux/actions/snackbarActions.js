

const setSnackbar = (snackbarOpen, snackbarType = 'success', snackbarMessage = '', snackbarAlive = 4000) => ({

    type: 'SET_SNACKBAR',
    snackbarOpen,
    snackbarType,
    snackbarMessage,
    snackbarAlive

})

export default setSnackbar