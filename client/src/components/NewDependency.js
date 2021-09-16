import React, { useEffect, useState } from 'react'

const NewDependency = ({ id, add }) => {
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
            </div>
        </div>
    )
}

export default NewDependency
