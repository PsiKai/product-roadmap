import React from 'react'
import Epic from "./Epic"

const Epics = ({epics}) => {
    console.log(epics);
    return (
        <div className="epics">
            {epics.map(epic => <Epic key={epic._id} epic={epic}/>)}
        </div>
    )
}

export default Epics
