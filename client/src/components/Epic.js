import React, { useState } from 'react'
import axios from 'axios'

import DeleteModal from './DeleteModal';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import BlockIcon from '@mui/icons-material/Block';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';

import {CSSTransition} from "react-transition-group"


const Epic = ({ epic: { title, status, description, dependencies, _id, toolkit }, edit, epic }) => {
    const [focus, setFocus] = useState(false)
    const [shrink, setShrink] = useState("")
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [loading, setLoading] = useState(false)

    const deleteEpic = async () => {
        try {
            const res = await axios.delete("/epic/delete", { data: { epic } })
            console.log(res.data);
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
        setConfirmDelete(false)
    }

    const statusIcon = (cardStatus) => {
        switch (cardStatus) {
            case "Planned": return <EventAvailableIcon/>
            case "In Progress": return <ConstructionIcon/>
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

    const openModal = (e) => {
        e.stopPropagation()
        setConfirmDelete(true)
    }

    const height = focus ? {animation: `grow 1200ms ease forwards`} : {}

    const expandCard = (e) => {
        if (e.target.className === "modal-backdrop") return
        setFocus(!focus)
        focus ? setShrink("shrink") : setShrink("")
    }

    return (
        <div className="epic__card" onClick={expandCard}>
            <h3>{title}</h3>
            {statusIcon(status)}
            <div className={`${shrink} epic__card--info`} style={height}>
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
                        onClick={openModal} 
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
            <div className="status-markers">
            {dependencies.map((dep, i) => {
                return  <span 
                            key={i}
                            style={{backgroundColor: `${dependencyStatus(dep.status)}`}}
                            className="dependency-count">
                        </span>
            })}
            </div>
            <CSSTransition
                in={confirmDelete}
                classNames="modal"
                timeout={200}
                unmountOnExit
            >
                <DeleteModal cancel={setConfirmDelete} confirm={deleteEpic} epicName={title} loading={loading} />
            </CSSTransition>
        </div>
    )
}

export default Epic
