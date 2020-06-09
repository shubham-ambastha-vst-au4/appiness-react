// Defining initial auth state
const authState = {
    isAuth: true,
    username: ''
}

// Reducer for auth
const authReducer = (state = authState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {

        case 'SET_USER': {  // for login user
            const email = action.payload;
            stateCopy.username = email;
            stateCopy.isAuth = true;
            state = stateCopy
            return state;
        }

        case 'LOGOUT_USER': {   // for logout
            stateCopy.username = '';
            stateCopy.isAuth = false;
            state = stateCopy
            return state;
        }

        default:
            return state;
    }
};

export default authReducer;