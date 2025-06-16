import React, { useContext } from 'react'
import { ThemeContext } from '../App'

// import { UserContext } from '../App'

const ChildC = () => {
    // const Mera = useContext(UserContext);
    const theme = useContext(ThemeContext);
    function handleClick(){

    }
  return (
    <>
      <div>
        <button onClick={handleClick}>
          Change Theme
        </button>
      </div>
    </>

  )
}

export default ChildC