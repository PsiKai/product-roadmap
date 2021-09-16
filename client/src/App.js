import React from 'react'
import './App.css';
import RoadMap from './components/RoadMap';
import AppState from './context/AppState';


function App() {
  
  return (
    <AppState>
      <RoadMap />
    </AppState>
  );
}

export default App;
