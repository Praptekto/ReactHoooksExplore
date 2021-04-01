//Create TODO LIST dengan Reducer
import { useReducer, useState } from "react";
import Todo from "./Todo";

function reducer(todos, action){
  switch (action.type){
    case 'ADD':
      // /something
      return [...todos, newTodo(action.name) ]
      
    case 'Toggle':
      // Something
      const tes=todos?.map((todo, index, todos)=>{
        if (todo.id===action.id){
          return {...todo, complete:!todo.complete}
          
        }
        return todo;
        
      })
      return tes;

      break;
    case 'Delete':
      // Something
      todos?.map((todo, index, todos)=>{
        if (todo.id===action.id){
          removeit(index)
          // var index = todos.indexOf({id: todo.id, name:todo.name , complete:todo.complete})
          // console.log(index);
          // removeit(index)
        }
      })

      function removeit(index){
        todos=todos.splice(index,1)
      }
      return todos
  
    default:
      return todos;
      // Something

  }
}


function newTodo(name){
  const id = Date.now() + Math.floor(Math.random() * 100000);
 
  return {id:id, name:name, complete:false}
}



function App() {
  const [name, setname] = useState('')
  const [todos, dispatch] = useReducer(reducer, [])

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    dispatch({type:'ADD', name:name});
    setname(' ')
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=>setname(e.target.value)}></input>
      </form>
      {todos?.map((todo)=>{
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      }
        
      )}
           
    </div>
  );
}

export default App;
