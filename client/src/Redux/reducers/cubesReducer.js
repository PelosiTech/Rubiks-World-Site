import { SET_CUBES, GET_CUBE } from '../actions/cubeActions'

export const cubes = (state = {}, action) => {
    switch (action.type) {
        case SET_CUBES:
            return action.data;
        case GET_CUBE:
            return {...state, cube: action.cube}
        default:
            return state
    }
}