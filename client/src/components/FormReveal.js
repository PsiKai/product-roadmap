import React, { Fragment, useState, useEffect } from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';

const FormReveal = ({ edit, setEdit }) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        edit ? setChecked(true) : setChecked(false)
    }, [edit])

    const abortEdit = () => {
        setChecked(false)
        setEdit(false)
    }

    return (
        <Fragment>
            {checked && <div onClick={abortEdit} className="form-overlay"></div>}
            <label htmlFor="form-reveal" className="form-reveal-label">
                <AssignmentIcon/>
            </label>
            <input 
                id="form-reveal" 
                type="checkbox" 
                checked={checked || edit} 
                onChange={() => setChecked(!checked)}
            />
        </Fragment>
    )
}

export default FormReveal
