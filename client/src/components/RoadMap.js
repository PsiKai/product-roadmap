import React, { useEffect, useContext, Fragment } from 'react'
import AppContext from '../context/AppContext'
import NewEpic from './NewEpic';
import Epics from "./Epics"

const RoadMap = () => {
    const appContext = useContext(AppContext)
    const { getEpics, epics } = appContext


    useEffect(() => {
        getEpics()
    }, [])
    

    return (
        epics.length ?
        <Fragment>
            <h1>Maxwell Product Roadmap</h1>
            <div className="app-root">
                <Epics epics={epics}/>
                <NewEpic epics={epics} />
            </div>
        </Fragment>
        : 
        <div>Loading...</div>
    )
}

export default RoadMap
