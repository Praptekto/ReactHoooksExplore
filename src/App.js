// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
import FunctionalContext from './FunctionalContext';


export const ThemeContext = React.createContext();


function App() {
  const [dark, setdark] = useState(false)

  const ToggleButton=(e)=>{
    e.preventDefault();
    setdark((dark)=>!dark)
  }
  return (
    <ThemeContext.Provider value={dark}>
      <button onClick={ToggleButton}>Toggle</button>

      <FunctionalContext/>
      
    </ThemeContext.Provider>
  );
}

export default App;
