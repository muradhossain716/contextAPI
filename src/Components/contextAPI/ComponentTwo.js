import { useContext } from "react";
import { AppDataContext } from "../../App";
import ComponentThree from "./ComponentThree";
export default function ComponentTwo({}) {
    const value=useContext(AppDataContext);
  return (
    <>
        <h1>{value}</h1>
        <ComponentThree />
    </>
    
  )
}
