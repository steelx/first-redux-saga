import * as TYPES from '../types'

const initialState = {
    people: []
}

const starWars = (state = initialState, action) => {
    switch(action.type) {
        case TYPES.FETCH_STARWARS_SUCCESS:
            return {...state, people: action.data}
    }
    return state;
}

export default starWars;