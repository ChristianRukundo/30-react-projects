import React from 'react'
import '../App.css'


const clickHandler = (e) => {
  const body = document.querySelector('body')
  body.style.background = ColorGenerator()
  e.target.style.background = ColorGenerator()

}
function ColorGenerator() {
  let letters = "1234567890ABCDEF"
  let color = '#';
  let i;
  for (i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)] 
  }
  return color;
}
const ColorRandomizer = () => {
  return (
    <div className='color'>
      <button className='btn success' onClick={clickHandler}>Click me</button>
      <button className='btn danger' onClick={clickHandler}>Click me</button>
      <button className='btn warning' onClick={clickHandler}>Click me</button>
      <button className='btn primary' onClick={clickHandler}>Click me</button>
    </div>  
  )
}

export default ColorRandomizer
