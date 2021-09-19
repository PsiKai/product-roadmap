import React, { useState, useEffect } from 'react'
import axios from "axios"
import NewDependency from './NewDependency'
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import EditOffIcon from '@mui/icons-material/EditOff';
import FormReveal from './FormReveal';
import TreeNav from "./TreeNav"

import {CSSTransition, TransitionGroup} from 'react-transition-group'

const NewEpic = ({ epic=null, editState, setEdit, setEpic }) => {
    const [form, setForm] = useState({toolkit: "borrower"})
    const [newDependencies, setNewDependencies] = useState([])
    const [dependencies, setDependencies] = useState([])

    useEffect(() => {
        if (epic) {
            setForm(epic)
            if (epic.dependencies) {
                setNewDependencies(epic.dependencies)
                setDependencies(epic.dependencies)
            } else {
                setDependencies([])
                setNewDependencies([])
            }
        }
    }, [epic])

    useEffect(() => {
        setForm({
            ...form,
            dependencies
        })
    //eslint-disable-next-line
    }, [dependencies])

    const inputChange = (e) => {
        console.log(e);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const route = editState ? "/epic/edit" : "/epic/new"
        const newEpic = {epic: form}
        try {
            const res = await axios.post(route, newEpic)
            console.log(res.data);
            window.location.reload()
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
        setNewDependencies([...newDependencies, {id: uuidv4()}])
    }

    const removeDependency = (id) => {
        const copy = [...newDependencies]
        const filtered = copy.filter(item => item.id !== id)
        setNewDependencies(filtered)

        const depCopy = [...dependencies]
        const depFilter = depCopy.filter(item => item.id !== id)
        setDependencies(depFilter)
    }

    const cancelEdit = () => {
        setDependencies([])
        setNewDependencies([])
        setForm({title: "", description: "", toolkit: "borrower", status: "", priority: ""})
        setEpic([])
        setEdit(false)
    }

    const radioChange = (e) => {
        const { value } = e.target
        setForm({
            ...form,
            toolkit: e.target.value
        })
    }

    const toolkits = ["Borrower Toolkit", "Loan Officer Toolkit", "Manager and Integrations Toolkit"]
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
                {/* <select onChange={inputChange} id="toolkit" value={form.toolkit} required>
                    <option value="">Select Toolkit</option>
                    {toolkits.map((kit, i) => <option value={kit} key={i}>{kit}</option>)}
                </select> */}
                <TreeNav change={inputChange} className={"form-radios"} name={"toolkit"} id="form" value={epic.toolkit}/>
                {/* <div className="form-radios">
                    <input id="manager" type="radio" value="manager" name="toolkit" onClick={inputChange}/>
                    <label htmlFor="manager"><span>Manager</span></label>
                    <input id="borrower" type="radio" value="borrower" name="toolkit" onClick={inputChange}/>
                    <label htmlFor="borrower"><span>Borrower</span></label>
                    <input id="lender" type="radio" value="lender" name="toolkit" onClick={inputChange}/>
                    <label htmlFor="lender"><span>Lender</span></label>
                </div> */}

                <label htmlFor="title">Title</label>
                <input onChange={inputChange} id="title" name="title" type="text" value={form.title} required></input>

                <label htmlFor="description">Description</label>
                <textarea onChange={inputChange} id="description" name="description" value={form.description} rows="3"></textarea>

                <label htmlFor="status">Status</label>
                <select onChange={inputChange} id="status" name="status" value={form.status} required>
                    <option value="">Select Status</option>
                    {statuses.map((status, i) => <option value={status} key={i}>{status}</option>)}
                </select>

                <label htmlFor="priority">Priority</label>
                <input 
                    onChange={inputChange} 
                    id="priority" 
                    name="priority"
                    type="number" 
                    step="1" 
                    min="1"
                    value={form.priority}
                    required
                >
                </input>
                {/* <input type="range" id="priority" min="1" max={form.toolkit.length}/> */}

                <button type="button" onClick={addDependency} className="action"><AddIcon/>Task</button>
                <TransitionGroup>
                {newDependencies.map((item, i) => {
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
                                statuses={statuses} 
                                remove={removeDependency}
                                value={form.dependencies[i]}
                                />
                            </CSSTransition>
                })}
                </TransitionGroup>

                <button type="submit">{editState ? "Confirm Changes" : "Submit"}</button>
            </form>
        </div>
        </div>
    )
}

export default NewEpic
