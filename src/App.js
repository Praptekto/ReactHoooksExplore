//Create TODO LIST dengan Reducer
import { useCallback, useReducer, useState } from "react";
import List from "./List";



function App() {
  const [numb, setnumb] = useState(0)
  const [dark, setdark] = useState(true)

  const theme={
    color: dark? "white": "black",
    backgroundColor: dark? "black":"white"
  }

  const getitems=useCallback(
    ()=>{
      return [(numb), (numb)+1, (numb)+2]
    },
    [numb],
  )

  return (
    <div className="App" >
        
          <input value={numb} onChange={(e)=>setnumb(()=>{
               return parseInt(e.target.value)})
          
        }/>
        
        <button onClick={()=>setdark((dark)=>!dark) }>Toggle</button>

      <div style={theme}>
        <List getitems={getitems}/>
      </div>

   
           
    </div>
  );
}

export default App;
