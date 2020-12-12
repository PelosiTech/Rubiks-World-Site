export const SET_USER = "SET_USER"
export const REMOVE_USER = "REMOVE_USER"
export const CREATE_USER = "CREATE_USER"


export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}

export const createUser = (user) => {
    return {
        type: CREATE_USER,
        user
    }
}



export const login = (email, password) => {

    return async dispatch => {
        const res = await fetch(`/api/session/token/auth`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            const data = await res.json();
            dispatch(setUser(data))
        }
        return res;
    };
};

export const logout = () => async dispatch => {
    const res = await fetch('/api/session/token/remove', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (res.ok){
        dispatch(removeUser())
    }
    return res
}

export const signup = (username, email, password) => async dispatch => {
    const response = await fetch('/api/users/', {
        method: 'post',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });
    if (response.ok) {
        const user = await response.json();
        dispatch(createUser(user));
    }
}