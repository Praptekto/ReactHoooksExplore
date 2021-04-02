import React, { useEffect, useState } from 'react'


function getsavedvalue(key, initialvalue){

    const saved=JSON.parse(localStorage.getItem(key));
    console.log(saved)
    if (saved){
        return saved;
    }
    if (initialvalue instanceof Function){
        return initialvalue();
    }
    return initialvalue;

}
var tes=0;

export default function useLocalstorage(key, initialvalue) {
    const [value, setvalue] = useState(()=>{
        return getsavedvalue(key, initialvalue)
    })

    
    useEffect(() => {
        if (value!==''){
            localStorage.setItem(key, JSON.stringify(value)) 
        }
        // localStorage.setItem(key, JSON.stringify(value))
        // return () => {
        //     // cleanup
        // }
        // console.log(typeof JSON.stringify(value))
    }, [value])
    



    return [value,setvalue]
}


