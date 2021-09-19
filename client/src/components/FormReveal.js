import React, { Fragment, useState, useEffect } from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';

const FormReveal = ({ edit }) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        edit ? setChecked(true) : setChecked(false)
    }, [edit])

    return (
        <Fragment>
            {checked && <div onClick={() => setChecked(false)} className="form-overlay"></div>}
            <label htmlFor="form-reveal" className="form-reveal-label">
                <AssignmentIcon/>
            </label>
            <input id="form-reveal" type="checkbox" checked={checked || null} onChange={() => setChecked(!checked)}/>
        </Fragment>
    )
}

export default FormReveal
