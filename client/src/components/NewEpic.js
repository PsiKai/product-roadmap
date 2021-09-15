import React, { useState } from 'react'
import axios from "axios"

const NewEpic = ({epics}) => {
    const [form, setForm] = useState({})

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

    const toolkits = ["Borrower Toolkit", "Loan Officer Toolkit", "Manager and Integrations Toolkit"]
    const statuses = ["Planned", "In Progress", "Completed", "Pruned"]

    return (
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

            <label htmlFor="blocking">Blocking:</label>
            <select onChange={inputChange} id="blocking">
                <option value="">None</option>
                {epics.map((item) => <option key={item._id} value={item._id}>{item.title}</option>)}
            </select>

            <label htmlFor="blocked">Blocked By:</label>
            <select onChange={inputChange} id="blocked">
                <option value="">None</option>
                {epics.map((item) => <option key={item._id} value={item._id}>{item.title}</option>)}   
            </select>

            <button type="submit">Submit</button>
        </form>
    )
}

export default NewEpic
