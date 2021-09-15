import React from 'react'

const Epic = ({ epic: { title, toolkit, status, description } }) => {
    return (
        <div>
            <h1>{toolkit}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{status}</h3>
        </div>
    )
}

export default Epic
