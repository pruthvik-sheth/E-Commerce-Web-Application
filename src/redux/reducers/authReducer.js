import cookieFetcher from '../../utils/cookieFetcher'

const cookies = cookieFetcher()


const initialAuthState = {
    loggedIn: !!cookies['user'],
    userName: cookies['user']
}




const authReducer = (state = initialAuthState, action) => {

    switch (action.type) {

        case 'LOGIN':
            return {
                loggedIn: action.loggedIn,
                userName: action.userName
            }

        case 'LOGOUT':
            return {
                loggedIn: false,
                userName: null
            }

        default:
            return state
    }

}

export default authReducer