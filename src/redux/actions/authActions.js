

export const login = ( { loggedIn, userId } ) => ({

    type: 'LOGIN',
    loggedIn,
    userId

})

export const logout = () => ({

    type: 'LOGOUT',
    
})