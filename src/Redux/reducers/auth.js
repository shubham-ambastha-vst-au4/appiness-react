const authState = {
    isAuth: true,
    username: ''
}

const authReducer = (state = authState, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {

        case 'SET_USER': {
            const email = action.payload;
            stateCopy.username = email;
            stateCopy.isAuth = true;
            state = stateCopy
            return state;
        }

        case 'LOGOUT_USER': {
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