import './App.css';
import { useEffect, useState } from 'react'
import axios from "axios"
import NewEpic from './components/NewEpic';

function App() {
  const [epics, setEpics] = useState([])

  useEffect(() => {
    getEpics()
  }, [])
  
  const getEpics = async () => {
    try {
      const res = await axios.get("/epic/new")
      setEpics(res.data)
      console.log(res);
    } catch (error) {
      console.log(error.response); 
    }
  }
  return (
    <div className="App">
      <NewEpic epics={epics} />
      {/* <Epics /> */}
    </div>
  );
}

export default App;
