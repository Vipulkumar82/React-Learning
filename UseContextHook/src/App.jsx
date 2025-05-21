import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'

function App() {

  // Step 1: Create Context()
  // Step 2: Wrap All Components into Provider
  // Step 3: Pass the value  @useState
  // Step 4: Export the Context*
  // Step 5: Consume the Value in which Component is required 
  const useContext = createContext();
  return (
    <>
    <useContext.Provider>
          <ChildA/>
    </useContext.Provider>
    </>
  )
}

export default App
