import React, { useRef, useState } from "react";

function TodolistUseref(){
    const[refdata,setRefdata]=useState([])
    const data=useRef()

    const handleChange=(e)=>{
        e.preventDefault()    
        const reset=data.current.value 
    setRefdata((olddata)=>[...olddata,reset])   
    data.current.value=null

    // e.target.reset()
     
}
    return(
        <>
        <h1>useRef concept</h1>
        <form onSubmit={(e)=>{handleChange(e)}}>
            <input type="text" ref={data} placeholder="enter value" />
        
        <button type="onsubmit" value='onsumit'>submit</button>
        </form >
        
        {refdata.map((item,index)=>{
            return(
                <div key={index}>
                <div>{item}</div>
            </div>
            )
            
        })
        }
        </>
    )
}
export default TodolistUseref;