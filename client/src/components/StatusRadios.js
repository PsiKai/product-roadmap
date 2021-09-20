import React, { useState } from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BlockIcon from '@mui/icons-material/Block';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';

const StatusRadios = ({ groupId }) => {
    const [status, setStatus] = useState("planned")

    const moveSelector = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className={`status-radios-container ${status}`}>
            <label htmlFor={`completed-${groupId}`}><DoneAllOutlinedIcon/></label>
            <input id={`completed-${groupId}`} type="radio" name="status-radio" value="completed" onClick={moveSelector}/>

            <label htmlFor={`in-progress-${groupId}`}><ConstructionIcon/></label>
            <input id={`in-progress-${groupId}`} type="radio" name="status-radio" value="in-progress" onClick={moveSelector} />

            <label htmlFor={`planned-${groupId}`}><EventAvailableIcon/></label>
            <input id={`planned-${groupId}`} type="radio" name="status-radio" value="planned" onClick={moveSelector} />

            <label htmlFor={`blocked-${groupId}`}><BlockIcon/></label>
            <input id={`blocked-${groupId}`} type="radio" name="status-radio" value="blocked" onClick={moveSelector} />

            <label htmlFor={`pruned-${groupId}`}><ContentCutIcon/></label>
            <input id={`pruned-${groupId}`} type="radio" name="status-radio" value="pruned" onClick={moveSelector} />
        </div>
    )
}

export default StatusRadios
