import { useState } from 'react'
import './App.css'
import LoginBtn from './Components/LoginBtn';
import LogoutBtn from './Components/LogoutBtn';

function App() {
  const [isLoggedIn, setLoggedIn]=useState(false);

      //Early Access
      if(!isLoggedIn){
        return(
          <div>
            <h1>Har Har Mahadev</h1>
            <LoginBtn/>
          </div>
        )
      }


      //Logical Operartor

      return(
        <div>
          <h1>Jay siya Ram</h1>
        <div>
          {isLoggedIn && <LogoutBtn/>}
        </div>
        </div>
      )

      //Using Ternary Operator

      // return(
      //   <div>
      //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
      //   </div>
      // )

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
