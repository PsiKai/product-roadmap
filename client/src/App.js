import './App.css';
import { useEffect, useState } from 'react'
import axios from "axios"
import NewEpic from './components/NewEpic';
import Epics from "./components/Epics"

function App() {
  const [epics, setEpics] = useState(null)

  useEffect(() => {
    getEpics()
  }, [])
  
  const getEpics = async () => {
    try {
      const res = await axios.get("/epic/new")
      setEpics(res.data)
    } catch (error) {
      console.log(error.response); 
    }
  }
  return (
    epics ?
    <div className="app-root">
      <Epics epics={epics} />
      <NewEpic epics={epics} />
    </div>
    :
    <div>Loading...</div>
    
  );
}

export default App;
