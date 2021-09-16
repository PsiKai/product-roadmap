import React from 'react'

const Epic = ({ epic: { title, status, description } }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <h4>{status}</h4>
        </div>
    )
}

export default Epic
