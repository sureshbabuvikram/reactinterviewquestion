import React, {  useEffect, useState, useContext } from "react";
import { textContextValue } from "./App";
import axios from "axios";
function Hooks(){
    const[datas,setData]=useState([])
    const[active,setActive]=useState(false)
    const [users, setUsers] = useState([])

    //useContext
    const [value1,setValue]=useContext(textContextValue)

    //useContext updatevalue
    const[context,setContext]=useContext(textContextValue)

    //axios
    const[adata,setAdata]=useState([])

    useEffect(()=>{
         getData()            
    },[])
    const getData=async()=>{
       await fetch("https://jsonplaceholder.typicode.com/users")
       .then((response)=>response.json())
        .then((json)=>{
            setActive(true) 
            setData(json)})
    }

    const getaxiosdata=async()=>{
        const res=await axios.get("http://jsonplaceholder.typicode.com/users")
        console.log("data",res)
        //setActive(true)
        setAdata(res.data)
    }

    const fetchData =async () => {
     await fetch("http://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((json) => {
            console.log("users data",json)
          setUsers(json)
          console.log("users data",users)
          setActive(true)
        })

        getaxiosdata();
    }

    const valueUpdate=(n)=>{
        setContext(n)
    }
  
   

    return(
        <>
        <h1>Hooks</h1>
    <button type="submit" onClick={()=>fetchData()}>Fetch Data</button> 
            {active ?
                users.map((item, index) => {
                    return (
                        <div key={index}>
                            <div >Name:{item.title}</div>
                            <div>Id:{item.id}</div>
                        </div>
                    )
                })
                : ""
            }

    {active?
    datas.map((item,index)=>{
        return(
            <div key={index}>
            <div >{item.name}</div>
            </div>
        )
    })
    :""}

    <h1> UseContext value:{value1}</h1>
    <button onClick={()=>{valueUpdate(11)}}>update</button>
    <h1> UseContext updated value:{context}</h1>

    {active?
    adata.map((item,index)=>{
        return(
            <div key={index}>
            <div >name:{item.name}</div>
            </div>
        )
    }):""}
       
        
        
       
        </>
    )
}
export default Hooks;