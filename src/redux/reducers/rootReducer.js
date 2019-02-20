const initialState = {
    user: {profile: {name: "jopi"}},
    auth: {loggedIn: false},
};

function rootReducer(state = initialState, action) {
    let newState = {...state};
    if (action.type === "LOGIN") {
        if (!state.auth.loggedIn) {
            newState.auth.loggedIn = true;
        }
        return newState;
    }

    if (action.type === "LOGOUT") {
        if (state.auth.loggedIn) {
            newState.auth.loggedIn = false;
        }
        return newState;
    }
    return initialState;
};

export default rootReducer;