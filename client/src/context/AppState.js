import React, { useReducer } from "react"
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
    GET_EPICS
} from './types.js'
import axios from "axios"


const AppState = (props) => {
    const intitialState = {
        epics: []
    }

    const [state, dispatch] = useReducer(AppReducer, intitialState);

    const getEpics = async () => {
        try {
          const res = await axios.get("/epic/new")
          dispatch({
              type: GET_EPICS,
              payload: res.data
          })
        } catch (error) {
          console.log(error.response); 
        }
      }

    return (
        <AppContext.Provider
            value={{
                epics: state.epics,
                getEpics
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState
