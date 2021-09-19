import React, { Fragment, useState, useEffect } from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';

const FormReveal = ({ edit }) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        edit ? setChecked(true) : setChecked(false)
    }, [edit])

    return (
        <Fragment>
            <label htmlFor="form-reveal">
                <AssignmentIcon/>
            </label>
            <input id="form-reveal" type="checkbox" checked={checked || null} />
        </Fragment>
    )
}

export default FormReveal
