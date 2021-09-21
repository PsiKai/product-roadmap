import React, { useEffect, useState } from 'react'
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BlockIcon from '@mui/icons-material/Block';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';

const StatusRadios = ({ groupId, add, value }) => {
    const [status, setStatus] = useState("planned")
    // const [klass, setKlass] = useState("planned")

    useEffect(() => {
        setStatus(value.toLowerCase().replace(/ /g, "-") || "planned")
    }, [value])

    const moveSelector = (e) => {
        setStatus(e.target.getAttribute("data-class"))
        add(e)
    }

    return (
        <div className={`status-radios-container ${status}`}>
            <label htmlFor={`planned-${groupId}`}><EventAvailableIcon/></label>
            <input 
                id={`planned-${groupId}`} 
                type="radio" name="status" 
                value="Planned" 
                data-class="planned" 
                onClick={moveSelector} 
            />

            <label htmlFor={`in-progress-${groupId}`}><ConstructionIcon/></label>
            <input 
                id={`in-progress-${groupId}`} 
                type="radio" 
                name="status" 
                value="In Progress" 
                data-class="in-progress" 
                onClick={moveSelector} 
            />


            <label htmlFor={`completed-${groupId}`}><DoneAllOutlinedIcon/></label>
            <input 
                id={`completed-${groupId}`} 
                type="radio" 
                name="status" 
                value="Completed" 
                data-class="completed" 
                onClick={moveSelector}
            />

            <label htmlFor={`blocked-${groupId}`}><BlockIcon/></label>
            <input 
                id={`blocked-${groupId}`} 
                type="radio" 
                name="status" 
                value="Blocked" 
                data-class="blocked" 
                onClick={moveSelector} 
            />

            <label htmlFor={`pruned-${groupId}`}><ContentCutIcon/></label>
            <input 
                id={`pruned-${groupId}`} 
                type="radio" 
                name="status" 
                value="Pruned" 
                data-class="pruned" 
                onClick={moveSelector} 
            />
        </div>
    )
}

export default StatusRadios
