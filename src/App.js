import React, { createContext,  useState } from "react";
import Apicalls from "./Apicalls";
import Display from "./Displayreduxstorevalue";
import Hooks from "./hooks";
import Redux from "./Redux";
import Todo from "./todo";
import TodolistUseref from "./TodolistUseref";
import Generaljs from "./Generaljs";
import Examplehooks from "./Examplehooks";
import Apiexample from "./Apiexample";

//useContext hook
export const textContextValue=createContext()

function App() {
  const[value,setValue]=useState(10)
  return (
  <>
  <textContextValue.Provider value={[value,setValue]}>
     <Todo />
  <Hooks />
  <Apicalls />
    <Redux />
    <Display />
    <TodolistUseref />
    <Generaljs />
    <Examplehooks />
    <Apiexample />
  </textContextValue.Provider>
 
  </> 
  
  );
}

export default App;
