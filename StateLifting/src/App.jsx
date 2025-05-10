import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
//We have to Do:- 
//Create State
//manage State
//change State
// Sabhi child me state ko update karwana

  const [name, setName] = useState("")

  return (
    <>
    <h1>Learn About StateLifting</h1>
    <div className="main">
      <Card name={name} setName={setName}/>
      <p>Output from parent: {name}</p>
    
    </div>
    </>
  )
}

export default App
