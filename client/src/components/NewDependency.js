import React, { useEffect, useState } from 'react'

const NewDependency = ({ id, add, statuses, remove, index, value }) => {
    const [dependency, setDependency] = useState({id, title: "", status: "", description: ""})

    const inputChange = (e) => {
        setDependency({
            ...dependency,
            [e.target.name]: e.target.value,
            id
        })
    }

    useEffect(() => {
        if (value) {
            setDependency(value)
        } else {
            setDependency({id, title: "", status: "", description: ""})
        }
    }, [])

    useEffect(() => {
        add(dependency)
    }, [dependency])

    return (
        <div>
            <hr/>
            <p>Dependency {index + 1}</p>
            <button type="button" onClick={() => remove(id)}>X</button>
            <div>
                <label htmlFor={`title-${id}`}>Title</label>
                <input name="title" onChange={inputChange} id={`title-${id}`} type="text" value={dependency.title}></input>
                <label htmlFor={`description-${id}`}>Description</label>
                <textarea name="description" onChange={inputChange} id={`description-${id}`} value={dependency.description}></textarea>
                <select onChange={inputChange} id="status" name="status" value={dependency.status}>
                    <option value="">Select Status</option>
                    {statuses.map((status, i) => <option value={status} key={i}>{status}</option>)}
                </select>
            </div>
            <hr/>
        </div>
    )
}

export default NewDependency
