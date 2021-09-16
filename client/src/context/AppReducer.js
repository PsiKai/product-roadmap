import {
    GET_EPICS
} from './types.js'

export default (state, action) => {

    switch (action.type) {
        case GET_EPICS:
            return {
                ...state,
                epics: action.payload
            }
        default:
            return state;
    }
}
