import React from 'react'
import img1 from '../assets/img3.jpg'
import './UserCard.css'
function UserCard() {
  return (
    <div className='user-container'>
        <p id='title'>Vipul Thakur</p>
        <img id='user-img' src={img1} alt='Thakur Sahab'></img>
        <p id='desc'>Description of Vipul Thakur</p>
    </div>
  )
}

export default UserCard