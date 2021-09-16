import {
    GET_EPICS
} from './types.js'

export default (state, action) => {

    switch (action.type) {
        case GET_EPICS:
            const manager = action.payload.filter(epic => epic.toolkit.includes("Manager"))
            const borrower = action.payload.filter(epic => epic.toolkit.includes("Borrower"))
            const lender = action.payload.filter(epic => epic.toolkit.includes("Officer"))
// console.log(manager, borrower, lender)
            return {
                ...state,
                epics: [manager, borrower, lender]
            }
        default:
            return state;
    }
}
