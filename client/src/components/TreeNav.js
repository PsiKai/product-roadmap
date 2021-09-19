import React, { useState, useEffect } from 'react'

const TreeNav = ({ change, name, className, id, value }) => {
    const [nav, setNav] = useState("borrower")

    useEffect(() => {
        setNav(value || "borrower")
    }, [value])

    const assignNav = (e) => {
        setNav(e.target.value)
        change && change(e)
    }

    return (
        <div className={`${className} ${nav}`}>
            <input id={`manager-${id}`} type="radio" value="manager" name={name} onClick={assignNav}/>
            <label htmlFor={`manager-${id}`}><span>Manager</span></label>
            <input id={`borrower-${id}`} type="radio" value="borrower" name={name} onClick={assignNav}/>
            <label htmlFor={`borrower-${id}`}><span>Borrower</span></label>
            <input id={`lender-${id}`} type="radio" value="lender" name={name} onClick={assignNav}/>
            <label htmlFor={`lender-${id}`}><span>Lender</span></label>
        </div>
    )
}

export default TreeNav
