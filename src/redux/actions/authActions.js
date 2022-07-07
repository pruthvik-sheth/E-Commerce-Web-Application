

export const login = ({ loggedIn, userName, role }) => ({

    type: 'LOGIN',
    loggedIn,
    userName,
    role

})

export const logout = () => ({

    type: 'LOGOUT',

})