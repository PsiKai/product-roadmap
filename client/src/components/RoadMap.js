import React, { useEffect, useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import NewEpic from './NewEpic';
import Epics from "./Epics"
import Heading from './Heading';
import Legend from './Legend';
import TreeNav from "./TreeNav"
// import FormReveal from './FormReveal';
import CircularProgress from '@mui/material/CircularProgress';

const RoadMap = () => {
    const appContext = useContext(AppContext)
    const { getEpics, epics } = appContext

    const [epic, setEpic] = useState([])
    const [edit, setEdit] = useState(false)


    useEffect(() => {
        getEpics()
    //eslint-disable-next-line
    }, [])

    const editEpic = (e) => {
        const { name, id } = e.currentTarget
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
        <div className="roadmap-container">
            <Heading />
            <Legend />
            <TreeNav />
            {/* <FormReveal edit={edit}/> */}
            <div className="app-root">
                <NewEpic epic={epic} editState={edit} setEdit={setEdit} setEpic={setEpic}/>
                <Epics epics={epics} edit={editEpic}/>
            </div>
        </div>
        : 
        <div className="loading">
            <h2>Loading...</h2>
            <CircularProgress/>
        </div>
    )
}

export default RoadMap
