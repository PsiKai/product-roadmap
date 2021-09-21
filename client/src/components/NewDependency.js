import React, { useEffect, useState } from 'react'

import StatusRadios from './StatusRadios';

import ClearIcon from '@mui/icons-material/Clear';

const NewDependency = ({ id, add, remove, index, value }) => {
    const [dependency, setDependency] = useState({id, title: "", status: "Planned", description: ""})

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
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        add(dependency)
        //eslint-disable-next-line
    }, [dependency])

    return (
        
        <div className="sub-task">
            <h4>Sub-task {index + 1}</h4>
            <button type="button" onClick={() => remove(id)} className="secondary-action">
                <ClearIcon/>
            </button>
            <div>
                <label htmlFor={`title-${id}`}>Title</label>
                <input 
                    name="title" 
                    onChange={inputChange} 
                    id={`title-${id}`} 
                    type="text" 
                    value={dependency.title}>
                </input>

                <label htmlFor={`description-${id}`}>Description</label>
                <textarea 
                    name="description" 
                    onChange={inputChange} 
                    id={`description-${id}`} 
                    value={dependency.description}>
                </textarea>

                <label>Status</label>
                <StatusRadios groupId={`dep-${index + 1}`} add={inputChange} value={dependency.status}/>
            </div>
        </div>
    )
}

export default NewDependency
