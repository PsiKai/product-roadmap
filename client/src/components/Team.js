import React, { Fragment } from 'react'
import FaceIcon from '@mui/icons-material/Face';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import TeamReveal from './TeamReveal';

const Team = () => {
    return (
        <Fragment>
            <TeamReveal />
        <div className="team">
            <h1>Our Team</h1>
            <div className="team__columns">
                <div className="team__columns__toolkit">
                    <div className="team__columns__toolkit--container">
                        <FaceIcon/>
                        <h4>Borrower Toolkit</h4>
                    </div>
                    <div className="team__columns__toolkit--container">
                        <PeopleIcon/>
                        <h4>Loan Officer Toolkit</h4>
                    </div>
                    <div className="team__columns__toolkit--container">
                        <SettingsIcon/>
                        <h4>Integrations & Manager Toolkit</h4>
                    </div>
                    <div className="team__columns__toolkit--container">
                        <AssignmentTurnedInIcon/>
                        <h4>Processor & Underwriter Toolkit</h4>
                    </div>
                </div>
                <div className="team__columns__product">
                    <h3>Product Manager</h3>
                    <div className="team__columns__product--container">
                        <p>Alex Wald</p>
                    </div>
                    <div className="team__columns__product--container">
                        <p>Brian McCarthy</p>
                    </div>
                    <div className="team__columns__product--container">
                        <p>Josiah Feuerbacher</p>
                    </div>
                    <div className="team__columns__product--container">
                        <p>Alex McEvans and Michele Alesia</p>
                    </div>
                </div>

                <div className="team__columns__design">
                    <h3>Designer</h3>
                    <div className="team__columns__design--container">
                        <p>Kevin Carlisle</p>
                    </div>
                    <div className="team__columns__design--container">
                        <p>Kevin Carlisle and Alex Gardner</p>
                    </div>
                    <div className="team__columns__design--container">
                        <p>Alex Gardner</p>
                    </div>
                    <div className="team__columns__design--container">
                        <p>Tim Roman</p>
                    </div>
                </div>
                <div className="team__columns__tech">
                    <h3>Tech Lead</h3>
                    <div className="team__columns__tech--container">
                        <p>Ben Wright</p>
                    </div>
                    <div className="team__columns__tech--container">
                        <p>Matt Redd</p>
                    </div>
                    <div className="team__columns__tech--container">
                        <p>Brian Nix</p>
                    </div>
                    <div className="team__columns__tech--container">
                        <p>Xavier Hocquet</p>
                    </div>
                </div>
            </div>
            
        </div>
        </Fragment>
    )
}

export default Team
