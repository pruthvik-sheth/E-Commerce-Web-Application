import { useSelector } from "react-redux/es/exports"
import { Navigate } from "react-router-dom"

const PrivateRoute = (props) => {

    const loggedIn = useSelector(state => state.auth.loggedIn)

    return loggedIn ? <props.component /> : <Navigate to='/login' replace />
}

export default PrivateRoute