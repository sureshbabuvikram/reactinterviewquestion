import React, { useState } from 'react'

function Examplehooks() {

    const [value,setValue]= useState("suresh")

    function Exfun(){
        setValue("Venkat")
    }
  return (
    <>
    <button onClick={Exfun}>Click</button>
    <h1>{value}</h1>
    </>

  )
}

export default Examplehooks