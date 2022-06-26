const initialAuthState = {
    loggedIn: false,
    userName: null
}

const authReducer = (state = initialAuthState, action) => {

    switch(action.type) {

        case 'LOGIN':
            return {
                loggedIn: action.loggedIn,
                userName: action.userName
            }

        case 'LOGOUT':
            return {
                loggedIn: initialAuthState.loggedIn,
                userName: null
            }

        default:
            return state
    }

}

export default authReducer