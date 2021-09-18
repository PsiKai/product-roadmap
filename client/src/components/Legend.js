import React from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BuildIcon from '@mui/icons-material/Build';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BlockIcon from '@mui/icons-material/Block';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const Legend = () => {
    return (
        <div>
            <EventAvailableIcon /> <span>Planned</span>
            <BuildIcon/> <span>In Progress</span>
            <BlockIcon /> <span>Blocked</span>
            <ContentCutIcon/> <span>Pruned</span>
            <AssignmentTurnedInIcon/> <span>Completed</span>
            
        </div>
    )
}

export default Legend
