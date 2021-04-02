import React, { useDebugValue, useEffect, useState } from 'react'

function List({getitems}) {
    
    const [items, setitems] = useState([])
    

    useEffect(() => {
        console.log("List")
        setitems(getitems())
        return () => {
            
        }
    }, [getitems])
    console.log(items)
    return (
        items.map(item=> <div key={item}>{item}</div>)
    )
}

export default List
