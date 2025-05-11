import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './Components/LoginBtn';
import LogoutBtn from './Components/LogoutBtn';

function App() {
  const [isLoggedIn, setLoggedIn]=useState(false);



      //Using Ternary Operator

      return(
        <div>
          {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
        </div>
      )

    //if else conditional Statement

      // if(isLoggedIn){
      //   return(
      //     <div className="main">
      //     <h1>JayShriRam</h1>
      //     <LogoutBtn/>
      //     </div>
      //   )
      // }
      // else{
      //   return(
      //     <div className="main">
      //     <h1>JayShriRam</h1>
      //     <LoginBtn/>
      //     </div>
      //   )
      // }

}

export default App
