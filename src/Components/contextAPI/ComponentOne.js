import { createContext } from 'react';
import ComponentTwo from './ComponentTwo';
const DataContext=createContext();
export default function componentOne() {
  return (
    <DataContext.Provider value={'from parent'}>
        <ComponentTwo />
    </DataContext.Provider>
  )
}
export { DataContext };

