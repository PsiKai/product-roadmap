import React, { useState, useEffect, useContext, Fragment } from 'react'
import axios from "axios"
import NewDependency from './NewDependency'
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import EditOffIcon from '@mui/icons-material/EditOff';
import FormReveal from './FormReveal';
import TreeNav from "./TreeNav"
import StatusRadios from './StatusRadios';
import CircularProgress from '@mui/material/CircularProgress';

import {CSSTransition, TransitionGroup} from 'react-transition-group'
import AppContext from '../context/AppContext';

const NewEpic = ({ epic=null, editState, setEdit, setEpic }) => {
    const appContext = useContext(AppContext)
    const { epics: [ manager, borrower, lender ] } = appContext

    const [form, setForm] = useState({
        toolkit: "borrower", 
        priority: borrower.length + 1,
        status: "Planned"
    })
    const [dependencies, setDependencies] = useState([])
    const [toolkitLength, setToolkitLength] = useState(borrower.length + 1)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (epic) {
            setForm(epic)
            if (epic.dependencies) {
                setDependencies(epic.dependencies)
            } else {
                setDependencies([])
            }
        }
    }, [epic])

    useEffect(() => {
        setForm({ ...form, dependencies })
    //eslint-disable-next-line
    }, [dependencies])

    useEffect(() => {
        const length = getToolkitLength()
        setToolkitLength(length)
        const newPriority = epic.priority || length
        setForm({ ...form, priority: newPriority })
    //eslint-disable-next-line
    }, [form.toolkit])

    const inputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const route = editState ? "/epic/edit" : "/epic/new"
        const newEpic = {epic: form}
        try {
            const res = await axios.post(route, newEpic)
            console.log(res.data);
            res && window.location.reload()
        } catch (error) {
            console.log(error.response);
        }
    }

    const dependencyChange = (newDependency) => {
        const copy = [...dependencies]
        const find = copy.findIndex(item => item.id === newDependency.id)
        if (find > -1) {
            copy[find] = newDependency
            setDependencies(copy)
        } else {
            setDependencies([
                ...dependencies,
                newDependency
            ])
        }
    }

    const addDependency = () => {
        setDependencies([...dependencies, {id: uuidv4(), status: "Planned"}])
    }

    const removeDependency = (id) => {
        const depCopy = [...dependencies]
        const depFilter = depCopy.filter(item => item.id !== id)
        setDependencies(depFilter)
    }

    const cancelEdit = () => {
        setDependencies([])
        setForm({title: "", description: "", toolkit: "borrower", status: "", priority: getToolkitLength()})
        setEpic([])
        setEdit(false)
    }

    const getToolkitLength = () => {
        switch (form.toolkit) {
            case "manager": return manager.length + 1
            case "borrower": return borrower.length + 1
            case "lender": return lender.length + 1
            default: break;
        }
    }

    const getPriorityOrder = () => {
        const lastDigit = form.priority % 10
        const secondToLast = form.priority.toString().slice(-2, -1)
        if (secondToLast === "1") return "th"
        switch (lastDigit) {
            case 1: return "st"
            case 2: return "nd"
            case 3: return "rd"
            default: return "th"
        }
    }

    const statuses = ["Planned", "In Progress", "Completed", "Pruned", "Blocked"]

    return (
        <div className="form__wrapper">
                <FormReveal edit={editState} setEdit={cancelEdit}/>
        <div className="form-container">
            <form onSubmit={submitForm}>
                <h2>{editState ? "Edit This Epic!" : "Create a New Epic!"}</h2>

                {editState && 
                    <button onClick={cancelEdit} type="button" className="secondary-action" >
                        <EditOffIcon/>
                    </button>}

                <label htmlFor="toolkit">Toolkit</label>
                <TreeNav change={inputChange} className={"form-radios"} name={"toolkit"} id="form" value={form.toolkit}/>

                <label htmlFor="title">Title</label>
                <input onChange={inputChange} id="title" name="title" type="text" value={form.title} required></input>

                <label htmlFor="description">Description</label>
                <textarea onChange={inputChange} id="description" name="description" value={form.description} rows="3"></textarea>

                <label htmlFor="status">Status</label>
                <StatusRadios groupId={"epic"} add={inputChange} value={form.status}/>

                <div className="slider-container">
                    <label htmlFor="priority">{form.priority + getPriorityOrder()} Priority</label>
                    <input 
                        type="range" 
                        id="priority" 
                        name="priority" 
                        value={form.priority || getToolkitLength()} 
                        min="1" 
                        max={editState ? toolkitLength - 1 : toolkitLength}
                        onChange={inputChange}
                    />
                    <span>First</span>
                    <span>Last</span>
                </div>

                <button type="button" onClick={addDependency} className="action"><AddIcon/>Task</button>

                <TransitionGroup>
                {dependencies.map((item, i) => {
                    return <CSSTransition
                                key={item.id}
                                classNames="dependency"
                                timeout={400}
                            >
                            <NewDependency 
                                key={item.id} 
                                id={item.id} 
                                index={i} 
                                add={dependencyChange}
                                remove={removeDependency}
                                value={item}
                                />
                            </CSSTransition>
                })}
                </TransitionGroup>

                {editState ?
                    <button type="submit">
                        {loading ? 
                            <Fragment>Submitting <CircularProgress/></Fragment>
                            :
                            "Confirm Changes"}
                    </button>
                    :
                    <button type="submit">
                        {loading ? 
                            <Fragment>Submitting <CircularProgress/></Fragment>
                            : 
                            "Submit"}
                    </button>}
            </form>
        </div>
        </div>
    )
}

export default NewEpic
