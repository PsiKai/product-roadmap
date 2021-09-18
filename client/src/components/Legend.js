import React from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BuildIcon from '@mui/icons-material/Build';
import BlockIcon from '@mui/icons-material/Block';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

const Legend = () => {
    return (
        <div className="legend">
            {/* <h3>Legend</h3> */}
            <div className="icon-container">
                <EventAvailableIcon /> <span>Planned</span>
            </div>
            <div className="icon-container">
                <BuildIcon/> <span>In Progress</span>
            </div>
            <div className="icon-container">
                <BlockIcon /> <span>Blocked</span>
            </div>
            <div className="icon-container">
                <ContentCutIcon/> <span>Pruned</span>
            </div>
            <div className="icon-container">
                <DoneAllOutlinedIcon/> <span>Completed</span>
            </div>
            
        </div>
    )
}

export default Legend
