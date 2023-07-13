import axios from "axios";
import React, {  useState } from "react";
 function Apicalls(){

    const url="http://localhost:3000/getuser"
    // const url="https://jsonplaceholder.typicode.com/users"
    const[datas,setData]=useState([])
    const[active,setactive]=useState(false)

    const data={
            name:"Gawthu",
            email:"gawthu@gmail.com",
            age:26
        }
    const postcall=async()=>{
        const postdata=await axios.post("http://localhost:3000",data)
        console.log(postdata)
        getcall();
    }

   

    const getcall=async()=>{
        const getData=await axios.get(url)   
        setData(getData.data)           
        setactive(true)      
    }

   
    
 

    return(        
            <>
            <h1> API CALLS</h1>
            <button onClick={()=>{postcall()}}>GetData</button>
            {active?
            datas.map((item,index)=>{
                return(
                    <div key={index}>
                    <div>{item.name}</div>
                    <div >{item.email}</div>
                    </div>
                )
            })
            :""}
            </>        
    )

 }
 export default Apicalls