import { useContext } from "react";
import { DataContext } from './ComponentOne';
export default function ComponentThree() {
    const value=useContext(DataContext);
    const{count,handleClick}=value;
  return (<>
    <h1 onClick={()=>handleClick()}>{count}</h1>
    </>
  )
}
