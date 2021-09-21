import {
    GET_EPICS
} from './types.js'

//eslint-disable-next-line
export default (state, action) => {

    switch (action.type) {
        case GET_EPICS:
            const manager = new Array()
            const borrower = new Array()
            const lender = new Array()

            action.payload.forEach(epic => {
                switch (epic.toolkit) {
                    case "manager": manager[epic.priority - 1] = epic; break;
                    case "borrower": borrower[epic.priority - 1] = epic; break;
                    case "lender": lender[epic.priority - 1] = epic; break;
                    default: break;
                }
            });
            
            return {
                ...state,
                epics: [manager, borrower, lender]
            }
        default:
            return state;
    }
}
