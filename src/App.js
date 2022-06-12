import { createContext } from 'react';
import ComponentOne from "./Components/contextAPI/ComponentOne";


const AppDataContext=createContext();
function App() {
  return (
    <AppDataContext.Provider value={'value from app data'}>
      <ComponentOne />
    </AppDataContext.Provider>
  
  );
}

export default App;
export { AppDataContext };
