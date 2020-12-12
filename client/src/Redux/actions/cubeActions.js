export const SET_CUBES = 'SET_CUBES'
export const GET_CUBE = 'GET_CUBE'

export const setCubes = (data) => {
    return {
        type: SET_CUBES,
        data
    }
}

export const getCube = (cube) => {
    return {
        type: GET_CUBE,
        cube: cube
    }
}


export const retrieveCubes = () => {
    return async dispatch => {
        const res = await fetch(`/api/cubes`)

        if (res.ok) {
            const data = await res.json()
            dispatch(setCubes(data))
        }
        return res;
    };
};

export const cube = (id) => {
    return async dispatch => {
        const res = await fetch(`/api/cubes/${id}`)
        if (res.ok){
            const cube = await res.json()
            dispatch(getCube(cube))
            return cube
        }
    }
}