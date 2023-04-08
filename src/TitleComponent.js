import React from 'react'
import './App.css'

const TitleComponent = ({ text }) => {
  return (
    <div className='title'>
          <h1>{ !text ? "Title": text }</h1>
    </div>
  )
}

export default TitleComponent
