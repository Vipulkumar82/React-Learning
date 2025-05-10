import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </div>
  )
}

export default App
