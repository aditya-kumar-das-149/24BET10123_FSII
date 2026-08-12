import './App.css'
import React from 'react'
import {useState} from 'react'

function App() {
 const [color,setColor] = useState('blue')
 const [role,setRole] = useState('admin')
 function toggleRole(){
  setRole(prev=>(prev==='admin'?'user':'admin'))
 }
 function handleTheme(){
  setColor(prev=>(prev==='blue'?'black':'blue'));
 }
  return (
    <div 
    style={{backgroundColor:color,
     height:"100vh"}}>
      <button onClick={handleTheme}>{color==='blue'?'Dark Mode':'Light Mode'}</button>
      <br />
      <button onClick={toggleRole}>{role==='admin'?'admin':'user'}</button>
    </div>
  )
}

export default App
