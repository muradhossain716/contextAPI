import { useContext } from "react";
import { DataContext } from './ComponentOne';
export default function ComponentThree() {
    const value=useContext(DataContext);
  return (
    
    <div>{value}</div>
  )
}
