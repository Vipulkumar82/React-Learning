import { useState } from 'react'
import React from 'react'
import './Todo.css'
function Todo(){
  const [value,setValue] = useState('')
  const [tasks,setTasks] = useState([])

  function handleInput(event){
    setValue(event.target.value);
  }

  function addTask(event){
    event.preventDefault();
    setTasks([...tasks,value]);
    setValue('');
  }

  return (
    <section className='parent'>
      <form>
      <input className='input' placeholder='Enter Task' value={value} onChange={handleInput}/>
      <button className='button' onClick={addTask}>Add Task</button>
      </form>

      <div className='Tasks'>
        {tasks.map((task, index)=>(
          <ol>
            <li key={index}>{task}</li>
          </ol>
      ))}</div>
    </section>
  )
} 

export default Todo;