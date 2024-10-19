import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const Followers= useSelector((state)=>state.Count.value)
  return (
    <div>
        <h3>Followers: {Followers}</h3>
    </div>
  )
}

export default Profile