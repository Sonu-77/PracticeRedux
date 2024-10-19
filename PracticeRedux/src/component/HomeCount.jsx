import React from 'react'
import {  useSelector } from 'react-redux'

function HomeCount() {
    const count =useSelector((state)=>state.Count.value)
  return (
    <div>
        <h2>Showing the count value in the Home count Component through redux statement</h2>
        <h3>Count:{count}</h3>
    </div>
  )
}

export default HomeCount