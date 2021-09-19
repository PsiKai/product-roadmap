import React, { useState } from 'react'

const TreeNav = () => {
    const [nav, setNav] = useState("borrower")

    const assignNav = (e) => {
        setNav(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div className={`epics-tree__nav ${nav}`}>
            <input id="manager" type="radio" value="manager" name="navs" onClick={assignNav}/>
            <label htmlFor="manager"><span>Manager</span></label>
            <input id="borrower" type="radio" value="borrower" name="navs" onClick={assignNav}/>
            <label htmlFor="borrower"><span>Borrower</span></label>
            <input id="lender" type="radio" value="lender" name="navs" onClick={assignNav}/>
            <label htmlFor="lender"><span>Lender</span></label>
        </div>
    )
}

export default TreeNav
