import './App.css';
import react, { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [test, setTest] = useState("")

  useEffect(() => {
    testDB()
  }, [])
  
  const testDB = async () => {
    try {
      const res = await axios.get("/testdb")
      setTest(res.data.doc)
      console.log(res);
    } catch (error) {
      console.log(error.response); 
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://ca.slack-edge.com/T040ZFA3W-U01SGE9PCJJ-894fd36c293c-512" className="App-logo" alt="logo" />
        <p>LET'S GET EXCITED</p>
        <p>This is from DB: {test}</p>
      </header>
    </div>
  );
}

export default App;
