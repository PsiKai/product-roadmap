import React from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BuildIcon from '@mui/icons-material/Build';
import BlockIcon from '@mui/icons-material/Block';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

const Legend = () => {
    return (
        <div className="legend">
            <div className="icon-container">
                <DoneAllOutlinedIcon/> <span className="key">Completed</span>
                <span className="legend-color completed"></span>
            </div>
            <div className="icon-container">
                <BuildIcon/> <span className="key">In Progress</span>
                <span className="legend-color progress"></span>
            </div>
            <div className="icon-container">
                <EventAvailableIcon /> <span className="key">Planned</span>
                <span className="legend-color planned"></span>
            </div>
            <div className="icon-container">
                <BlockIcon /> <span className="key">Blocked</span>
                <span className="legend-color blocked"></span>
            </div>
            <div className="icon-container">
                <ContentCutIcon/> <span className="key">Pruned</span>
                <span className="legend-color pruned"></span>
            </div>
            
        </div>
    )
}

export default Legend
