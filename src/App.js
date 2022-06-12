import { createContext } from 'react';
import ComponentOne from "./Components/contextAPI/ComponentOne";


const AppDataContext=createContext();
function App() {
  let a=5;
  return (
    <AppDataContext.Provider value={a}>
      <ComponentOne />
    </AppDataContext.Provider>
  
  );
}

export default App;
export { AppDataContext };
