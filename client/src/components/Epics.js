import React, { Fragment } from 'react'
import Epic from "./Epic"

const Epics = ({epics, edit}) => {
    const [manager, borrower, lender] = epics
    
    return (
        <div className="epics-tree">
            <div className="epics manager">
                <h2>Manager and Integrations Toolkit</h2>
                {manager.map(epic => <Epic key={epic._id} epic={epic} edit={edit}/>)}
            </div>
            <div className="epics borrower">
                <h2>Borrower Toolkit</h2>
                {borrower.map(epic => <Epic key={epic._id} epic={epic} edit={edit}/>)}
            </div>
            <div className="epics lender">
                <h2>Loan Officer Toolkit</h2>
                {lender.map(epic => <Epic key={epic._id} epic={epic} edit={edit}/>)}
            </div>
        </div>
    )
}

export default Epics


