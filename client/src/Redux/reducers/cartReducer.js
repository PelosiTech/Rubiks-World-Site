import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions'

export const carts = (state = [], action) => {
    Object.freeze(state)
    let nextState;
    switch (action.type) {
        case ADD_TO_CART:
            nextState = [...state,action.cube]
            return nextState
        case REMOVE_FROM_CART:
            let flag = false
            nextState = [...state.filter((cube) => {
                if (flag === false && action.cubeId === cube.id) {
                    flag = true
                } else {
                    return cube
                }
            }
            )]
            return nextState
        default:
            return state
    }
}