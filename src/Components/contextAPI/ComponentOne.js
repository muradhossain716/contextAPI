import { createContext, useState } from 'react';
import ComponentTwo from './ComponentTwo';
const DataContext=createContext();
export default function ComponentOne() {
  const [count,setCount]=useState(localStorage.getItem('count'));
  const handleClick=()=>{
    setCount(parseInt(count)+1)
    localStorage.setItem('count',count)
  }
  return (
    <DataContext.Provider value={{count,handleClick}}>
        <ComponentTwo />
    </DataContext.Provider>
  )
}
export { DataContext };

