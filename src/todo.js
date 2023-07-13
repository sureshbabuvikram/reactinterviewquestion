import React, { useState } from "react"
function Todo(){
    const[data,setData]=useState("")
    const[list,setList]=useState([])

    const handleChange=(e)=>{
        e.preventDefault()
        setList((olddata)=>[...olddata,data])
        setData("")
    }

    const deletedata=(id)=>{
        setList((olddata)=>olddata.filter((i,index)=>id !== index))
    }

    return(
            <>
            <h1>TODO LIST</h1>
            <form onSubmit={(e)=>handleChange(e)}>
                <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
            <button type='submit' value='Submit'>todolist</button>
                        </form>

            {list.map((item,id)=>{
                return(
                    <>
                <div key={id}>{item}</div>
                <button onClick={()=>deletedata(id)} >X</button>
                </>
                )
            })}
            </>
        )
    
}
 export default Todo;