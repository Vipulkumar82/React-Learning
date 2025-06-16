import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

// const UserContext = createContext();
const ThemeContext = createContext();

function handleTheme(){
  
}

function App() {
  
  // Step 1: Create Context()
  // Step 2: Wrap All Components into Provider
  // Step 3: Pass the Value  @useState
  // Step 4: Export the Context*
  // Step 5: Consume the Value in which Component is required 


  // const [user, setUser] = useState({name:"Thakur"});
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div id="container">
          <button onClick={handleTheme} >Change Theme</button>
          <ChildA/>
        </div>
      </ThemeContext.Provider>


    {/* <UserContext.Provider value={user}>
          <ChildA/>
    </UserContext.Provider> */}
    </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
