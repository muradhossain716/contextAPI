import { createContext, useState } from 'react';
import ComponentTwo from './ComponentTwo';
const DataContext=createContext();
export default function ComponentOne() {
  const [count,setCount]=useState(0);
  const handleClick=()=>setCount(count+1);
  return (
    <DataContext.Provider value={{count,handleClick}}>
        <ComponentTwo />
    </DataContext.Provider>
  )
}
export { DataContext };

