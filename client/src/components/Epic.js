import React from 'react'

const Epic = ({ epic: { title, toolkit, status, description } }) => {
    return (
        <div>
            <p>{toolkit}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{status}</p>
        </div>
    )
}

export default Epic
