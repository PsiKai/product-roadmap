import {
    GET_EPICS
} from './types.js'

//eslint-disable-next-line
export default (state, action) => {

    switch (action.type) {
        case GET_EPICS:
            const manager = action.payload.filter(epic => epic.toolkit.includes("manager"))
            const borrower = action.payload.filter(epic => epic.toolkit.includes("borrower"))
            const lender = action.payload.filter(epic => epic.toolkit.includes("lender"))
            
            return {
                ...state,
                epics: [manager, borrower, lender]
            }
        default:
            return state;
    }
}
