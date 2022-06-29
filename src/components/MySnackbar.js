import Snackbar from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import { useDispatch, useSelector } from "react-redux"
import setSnackbar from "../redux/actions/snackbarActions"


const MySnackbar = () => {

    const dispatch = useDispatch()

    const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen)
    const snackbarType = useSelector(state => state.snackbar.snackbarType)
    const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch(setSnackbar(false, 'success', ''))
    }

    return (

        <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity={snackbarType}
                color={snackbarType}
            >
                {snackbarMessage}
            </Alert>
        </Snackbar>

    )
}

export default MySnackbar