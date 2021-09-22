import React, { Fragment, useState } from 'react'
import PeopleIcon from '@mui/icons-material/People';

const TeamReveal = () => {
    const [checked, setChecked] = useState(false)

    return (
        <Fragment className="team-reveal">
            {checked && <div className="team-reveal__overlay" onClick={() => setChecked(false)}></div>}
            <label htmlFor="team-reveal" className="team-reveal-label">
                <PeopleIcon/>
            </label>
            <input 
                id="team-reveal" 
                type="checkbox"
                checked={checked}
                onClick={() => setChecked(!checked)}
            />
        </Fragment>
    )
}

export default TeamReveal
