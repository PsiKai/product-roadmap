import React, { useEffect, useState } from 'react'

const NewDependency = ({ id, add, statuses }) => {
    const [dependency, setDependency] = useState({id})

    const inputChange = (e) => {
        setDependency({
            ...dependency,
            [e.target.name]: e.target.value,
            id
        })
    }

    useEffect(() => {
        add(dependency)
    }, [dependency])

    return (
        <div>
            <p>Dependency {id}</p>
            <div>
                <label htmlFor={`title-${id}`}>Title</label>
                <input name="title" onChange={inputChange} id={`title-${id}`} type="text"></input>
                <label htmlFor={`description-${id}`}>Description</label>
                <textarea name="description" onChange={inputChange} id={`description-${id}`}></textarea>
                <select onChange={inputChange} id="status" name="status">
                    <option value="">Select Status</option>
                    {statuses.map((status, i) => <option value={status} key={i}>{status}</option>)}
                </select>
            </div>
        </div>
    )
}

export default NewDependency
