import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Generaljs() {
    //undefined and Null    
    //  let a=10;

     const [value,setValue]=useState([])
     //object and arrays
     const url="https://jsonplaceholder.typicode.com/users"
     useEffect(() => {
        axios
          .get(url)
          .then(response => setValue(response.data))
          .catch(error => console.log(error));
      }, []);
      console.log("APIValue:",value)
  return (
    <div>Generaljs
    {/* <h1>{a}</h1> */}
    {value.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.email}</span>
          {/* Display other properties */}
        </div>
      ))}    
    </div>
  )
}

export default Generaljs