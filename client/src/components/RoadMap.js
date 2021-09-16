import React, { useEffect, useContext, Fragment } from 'react'
import AppContext from '../context/AppContext'
import NewEpic from './NewEpic';
import Epics from "./Epics"

const RoadMap = () => {
    const appContext = useContext(AppContext)
    const { epics, getEpics } = appContext


    useEffect(() => {
        getEpics()
    }, [])
    

    return (
        epics ?
            <Fragment>
                <h1>Maxwell Product Roadmap</h1>
                <div className="app-root">
                    <Epics epics={epics} />
                    <NewEpic epics={epics} />
                </div>
            </Fragment>
            :
            <div>Loading...</div>
    )
}

export default RoadMap
