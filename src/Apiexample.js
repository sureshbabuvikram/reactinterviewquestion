import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Apiexample() {
    const [value,setvalue]= useState([])
    const URL="https://jsonplaceholder.typicode.com/users";
    useEffect(()=>{
        axios.get(URL).then(res=>setvalue(res.data)).then(console.log(value)).catch(err=>console.log(err))
    },[value])

  return (
    <>
    <div>Apiexample</div>
    {value.map((item,index)=>{
        return(
            <div key={index}>
                <h1>{item.name}</h1>
            </div>
        )
    })}
    </>
    
  )
}

export default Apiexample;