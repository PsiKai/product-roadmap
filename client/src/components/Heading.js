import React from 'react'
import {ReactComponent as MaxwellLogo} from '../images/MaxwellLogo.svg'

const Heading = () => {
    return (
        <div className="heading">
            {/* <img src="./images/white-logo.png" alt="Maxwell Logo" className="logo-heading" /> */}
            <MaxwellLogo/>
            <h1>Maxwell Product Roadmap</h1>
        </div>
    )
}

export default Heading
