import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import { useDispatch, useSelector } from "react-redux"
import setSnackbar from "../redux/actions/snackbarActions"


const MySnackbar = () => {

    const dispatch = useDispatch()

    const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen)
    const snackbarType = useSelector(state => state.snackbar.snackbarType)
    const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage)
    const snackbarAlive = useSelector(state => state.snackbar.snackbarAlive)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch(setSnackbar(false, null, null))
    }

    return (

        <Snackbar
            open={snackbarOpen}
            autoHideDuration={snackbarAlive}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            {
                snackbarOpen ? (
                    <Alert
                        onClose={handleClose}
                        elevation={6}
                        variant="filled"
                        severity={snackbarType}
                        color={snackbarType}
                    >
                        {snackbarMessage}
                    </Alert>
                ) : null
            }
        </Snackbar>

    )
}

export default MySnackbar