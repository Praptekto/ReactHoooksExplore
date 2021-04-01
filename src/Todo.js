import React from 'react'

function Todo({todo,dispatch}) {
    
    const theme= {
        color: todo.complete? 'red':'green',
        
      }
    
    return (
        <div>
            <span style={theme}>{todo.name}</span>
            <button onClick={()=>dispatch({type:'Toggle', id: todo.id})}>Toggle</button>
            <button onClick={()=>dispatch({type:'Delete', id:todo.id})}>Delete</button>            
        </div>
    )
}

export default Todo
