import React, { useState } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BuildIcon from '@mui/icons-material/Build';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BlockIcon from '@mui/icons-material/Block';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';


const Epic = ({ epic: { title, status, description, dependencies, _id, toolkit }, edit }) => {
    const [focus, setFocus] = useState(false)

    const deleteEpic = async () => {
        try {
            const res = await axios.delete("/epic/delete", { data: { id: _id } })
            console.log(res.data);
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    const statusIcon = (cardStatus) => {
        switch (cardStatus) {
            case "Planned": return <EventAvailableIcon/>
            case "In Progress": return <BuildIcon/>
            case "Completed": return <DoneAllOutlinedIcon/>
            case "Pruned": return <ContentCutIcon/>
            case "Blocked": return <BlockIcon/>
            default: break;
        }
    }

    const dependencyStatus = (depStatus) => {
        switch (depStatus) {
            case "Planned": return "var(--light-blue)"
            case "In Progress": return "var(--blue-green)"
            case "Completed": return "var(--teal-1)"
            default: return "var(--red)"
        }
    }

    const direction = focus ? "grow" : "shrink"
    const height = {animation: `${direction} 400ms ease forwards`}

    return (
        <div className="epic__card" onClick={() => setFocus(!focus)}>
            <h3>{title}</h3>
            {statusIcon(status)}
            <div className="hidden epic__card--info" style={height}>
                <div className="epic__card--buttons">
                    <button 
                        type="button" 
                        id={_id} 
                        name={toolkit} 
                        onClick={edit} 
                        className="action"
                    >    
                        <EditIcon/>
                    </button>
                    <button 
                        type="button" 
                        id={_id} 
                        onClick={deleteEpic} 
                        className="action"
                    >
                        <DeleteIcon/>
                    </button>
                </div>
                <p>{description}</p>
                <div className="epic__card--container">
                    {dependencies.map(dep => {
                        return  <div key={dep.id} className="epic__card--dependency">
                                    <h4>{dep.title}</h4>
                                    {statusIcon(dep.status)}
                                    <p>{dep.description}</p>
                                </div>
                    })}
                </div>
            </div>
            {dependencies.map((dep, i) => {
                return  <span 
                            style={{
                                left: `calc(1rem + ${i * 13}px)`,
                                backgroundColor: `${dependencyStatus(dep.status)}`
                            }}
                            className="dependency-count">
                        </span>
            })}
        </div>
    )
}

export default Epic
