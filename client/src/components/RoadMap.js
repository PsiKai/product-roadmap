import React, { useEffect, useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import NewEpic from './NewEpic';
import Epics from "./Epics"
import Heading from './Heading';
import Legend from './Legend';
import TreeNav from "./TreeNav"
import CircularProgress from '@mui/material/CircularProgress';
import Team from './Team';

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
        e.stopPropagation()
        const { name, id } = e.currentTarget
        const [manager, borrower, lender] = epics
        let epicArray
        switch (name) {
            case "manager":
                epicArray = manager.filter(item => item._id === id)
                break;
            case "borrower":
                epicArray = borrower.filter(item => item._id === id)
                break;
            case "lender":
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
            <TreeNav className={"epics-tree__nav"} name={"navs"} change={null} id={"epics"}/>
            <div className="app-root">
                <Team />
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
