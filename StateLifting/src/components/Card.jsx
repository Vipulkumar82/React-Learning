import React from 'react'
import '../App.css'
function Card(props) {
  return (
    <div className='cardMain'>
      <input type='text' onChange={(e)=> props.setName(e.currentTarget.value)} />
      <p>Here is the card output : {props.name}</p>
    </div>
  )
}

export default Card