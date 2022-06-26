

export const login = ( { loggedIn, userName } ) => ({

    type: 'LOGIN',
    loggedIn,
    userName

})

export const logout = () => ({

    type: 'LOGOUT',
    
})