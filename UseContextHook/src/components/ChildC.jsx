import React, { useContext } from 'react'
import { ThemeContext } from '../App'

// import { UserContext } from '../App'

const ChildC = () => {
    // const Mera = useContext(UserContext);
    const{ theme, setTheme } = useContext(ThemeContext);
    function handleClick(){
      if(theme=== 'light'){
        setTheme('dark')
      }else{
        setTheme('light')
      }
        // setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
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