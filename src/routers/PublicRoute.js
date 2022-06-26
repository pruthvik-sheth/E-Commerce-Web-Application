import { useSelector } from "react-redux/es/exports"
import { Navigate } from "react-router-dom"

const PublicRoute = (props) => {

    const loggedIn = useSelector(state => state.auth.loggedIn)

    return loggedIn ? <Navigate to='/' replace /> : <props.component />
}

export default PublicRoute