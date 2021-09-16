import React from 'react'

const Epic = ({ epic: { title, status, description, dependencies } }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>{status}</h4>
            {dependencies.map(dep => {
                return <div>
                    <h4>{dep.title}</h4>
                    <p>{dep.description}</p>
                    <h5>{dep.status}</h5>
                </div>
            })}
        </div>
    )
}

export default Epic
