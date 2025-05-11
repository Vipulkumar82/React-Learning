import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)

  //first -> Side-effect function
  //Second -> clean-up function
  //third -> comma separated depen. list


  //---> varriation : 1 
  //runs on Every render 

  // useEffect(()=>{
  //   alert("i will run on every render...")
  // })
  function handleClickMe(){
    setCount(count + 1);
  }

  //--->varriation : 2 
  //This runs on only first render

  // useEffect(() => {
  //   alert("This Runs only on First Render...")
  // }, [])
  

  //--->varriation : 3
  
  // useEffect(() => {
    //   alert("It will Run Every Time when count is Updated")
    // }, [count])
    

  //--->varriation : 4
  // Multiple dependencies:--
  // useEffect(() => {
  //   alert("It will Run Every Time when count/total is Updated")
  // }, [count,total])
  

  // function handleTotal(){
  //   setTotal(total+1);
  // }


    //--->varriation : 5
  //let's Add a Cleanup function means second part.
  useEffect(() => {
    alert("count is updated")
    return () => {
      alert("Count is cleaned")
    }
  }, [count])
  

  return (
    <div className='main'>
    <h1>Har Har MahaDev</h1>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={handleClickMe}>Click me</button>
      </div>
      <br />
      <div>
        <h2>Total: {total}</h2>
        <button onClick={handleTotal}>Total</button>
      </div>
    </div>
  )
}

export default App
