import React from 'react'

const Epic = ({ epic: { title, status, description, dependencies, _id, toolkit }, edit }) => {

    return (
        <div>
            <h3>{title}</h3>
            <button type="button" id={_id} name={toolkit} onClick={edit}>Edit</button>
            <p>{description}</p>
            <h4>{status}</h4>
            {dependencies.map(dep => {
                return  <div key={dep.id}>
                            <h4>{dep.title}</h4>
                            <p>{dep.description}</p>
                            <h5>{dep.status}</h5>
                        </div>
            })}
        </div>
    )
}

export default Epic
