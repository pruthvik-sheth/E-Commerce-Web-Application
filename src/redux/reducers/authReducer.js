const initialAuthState = {
    loggedIn: false,
    userId: null
}

const authReducer = (state = initialAuthState, action) => {

    switch(action.type) {

        case 'LOGIN':
            return {
                loggedIn: action.loggedIn,
                userId: action.userId
            }

        case 'LOGOUT':
            return {
                loggedIn: initialAuthState.loggedIn,
                userId: null
            }

        default:
            return state
    }

}

export default authReducer