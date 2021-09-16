import React, { Fragment } from 'react'
import Epic from "./Epic"

const Epics = (props) => {
    const [manager, borrower, lender] = props.epics

    return (
        <Fragment>
            <div className="epics">
                <h2>Manager and Integrations Toolkit</h2>
                {manager.map(epic => <Epic key={epic._id} epic={epic}/>)}
            </div>
            <div className="epics">
                <h2>Borrower Toolkit</h2>
                {borrower.map(epic => <Epic key={epic._id} epic={epic}/>)}
            </div>
            <div className="epics">
                <h2>Loan Officer Toolkit</h2>
                {lender.map(epic => <Epic key={epic._id} epic={epic}/>)}
            </div>
        </Fragment>
    )
}

export default Epics


