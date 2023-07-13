import React from "react";
import { useSelector } from "react-redux";

function Display(){
const value=useSelector((state)=>state.userdetail)
    return(
        <>    
        <h1>Display data</h1>    
        {value.length>0?
        value.map((item,index)=>{
            return(
                <div key={index}>
                    <div>{item.name}</div>
                </div>
            )
        }):""}

        </>
    )
}
export default Display