import React, { useEffect, useContext, Fragment, useState } from 'react'
import AppContext from '../context/AppContext'
import NewEpic from './NewEpic';
import Epics from "./Epics"

const RoadMap = () => {
    const appContext = useContext(AppContext)
    const { getEpics, epics } = appContext

    const [epic, setEpic] = useState([])
    const [edit, setEdit] = useState(false)


    useEffect(() => {
        getEpics()
    }, [])

    const editEpic = (e) => {
        const { name, id } = e.target
        console.log(name, id);
        const [manager, borrower, lender] = epics
        let epicArray
        switch (name) {
            case "Manager and Integrations Toolkit":
                epicArray = manager.filter(item => item._id === id)
                break;
            case "Borrower Toolkit":
                epicArray = borrower.filter(item => item._id === id)
                break;
            case "Loan Officer Toolkit":
                epicArray = lender.filter(item => item._id === id)
                break;
            default: 
                break;
        }
        setEdit(true)
        setEpic(epicArray[0])
    }
    

    return (
        epics.length ?
        <Fragment>
            <h1>Maxwell Product Roadmap</h1>
            <div className="app-root">
                <Epics epics={epics} edit={editEpic}/>
                <NewEpic epic={epic} editState={edit} setEdit={setEdit} setEpic={setEpic}/>
            </div>
        </Fragment>
        : 
        <div>Loading...</div>
    )
}

export default RoadMap
