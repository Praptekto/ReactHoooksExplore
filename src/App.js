import useLocalstorage from "./useLocalstorage";



function App() {
  const key='name';
  const [name, setName]=useLocalstorage(key, '')
  function handlesubmit(e){
    e.preventDefault();
    localStorage.setItem(key, JSON.stringify(name))

    setName('')
  }
  return (
   <form onSubmit={handlesubmit}>
      <input 
      type="text"
      value={name} 
      onChange={(e)=>{
        setName(e.target.value)
      }}/>
   </form>
      
   
  );
}

export default App;
