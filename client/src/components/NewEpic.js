import React, { useState, useEffect } from 'react'
import axios from "axios"
import NewDependency from './NewDependency'
import { v4 as uuidv4 } from 'uuid';

const NewEpic = ({ epics: [manager, borrower, lender]}) => {
    const [form, setForm] = useState({})
    const [newDependencies, setNewDependencies] = useState([])
    const [dependencies, setDependencies] = useState([])

    useEffect(() => {
        setForm({
            ...form,
            dependencies
        })
    }, [dependencies])

    const inputChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const newEpic = {epic: form}
        try {
            const res = await axios.post("/epic/new", newEpic)
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

    const addDependency = (e) => {
        setNewDependencies([...newDependencies, {id: uuidv4()}])
    }

    const removeDependency = (id) => {
        const copy = [...newDependencies]
        const filtered = copy.filter(item => item.id !== id)
        // const remapped = filtered.map((item, i) => item = {id: i + 1})
        // console.log(filtered, remapped);
        setNewDependencies(filtered)
        const depCopy = [...dependencies]
        const depFilter = depCopy.filter(item => item.id !== id)
        console.log(depFilter);
        setDependencies(depFilter)
    }

    const toolkits = ["Borrower Toolkit", "Loan Officer Toolkit", "Manager and Integrations Toolkit"]
    const statuses = ["Planned", "In Progress", "Completed", "Pruned", "Blocked"]

    return (
        <div className="form-container">
            <h2>Create a New Epic!</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="toolkit">Toolkit</label>
                <select onChange={inputChange} id="toolkit">
                    <option value="">Select Toolkit</option>
                    {toolkits.map((kit, i) => <option value={kit} key={i}>{kit}</option>)}
                </select>

                <label htmlFor="title">Title</label>
                <input onChange={inputChange} id="title" type="text"></input>

                <label htmlFor="description">Description</label>
                <textarea onChange={inputChange} id="description"></textarea>

                <label htmlFor="status">Status</label>
                <select onChange={inputChange} id="status">
                    <option value="">Select Status</option>
                    {statuses.map((status, i) => <option value={status} key={i}>{status}</option>)}
                </select>

                <label htmlFor="priority">Priority</label>
                <input 
                    onChange={inputChange} 
                    id="priority" 
                    type="number" 
                    step="1" 
                    min="1"
                >
                </input>

                <button type="button" onClick={addDependency}>+ Add Dependency</button>
                {newDependencies.map((item, i) => {
                    return <NewDependency key={item.id} id={item.id} index={i} add={dependencyChange} statuses={statuses} remove={removeDependency}/>
                })}


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewEpic
