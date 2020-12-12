export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (cube) => {
    return {
        type: ADD_TO_CART,
        cube: cube
    }
}

export const addCart = (cube) => {
    return async dispatch => {
        dispatch(addToCart(cube))
        return cube
    }
}

export const removeFromCart = (cubeId) => {
    return {
        type: REMOVE_FROM_CART,
        cubeId: cubeId
    }
}

export const removeCart = (cubeId) => {
    return async dispatch => {
        dispatch(removeFromCart(cubeId))
        return cubeId
    }
}