import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Redux(){

 const dispatch=useDispatch()
 const value=useSelector((state)=>state.userdetail)
 const [active,setActive]=useState(false)
 
const getcall=async()=>{
    const getdata=await axios.get("http://localhost:3000/getuser")
    dispatch({type:'postcall', payload:getdata.data })
    setActive(true)
    }
    const fakecall=async()=>{
        const getdata=await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({type:'fakecall', payload:getdata.data })
                }
    return(
        <>
        <h1>Redux</h1>       
        <button onClick={()=>getcall()}>My API</button>
        <button onClick={()=>fakecall()}>Fake API</button>
        {active?
        value.map((item,index)=>{
            return(
                <div key={index}>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                </div>
            )
        })
    :""}
        </>
    )
}

export default Redux;