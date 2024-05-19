import React, { useState } from 'react'
import './Styles/Input.css'
import Button from './Button'
import {v4 as uuidv4} from 'uuid'

function Input(props) {

  const [input, setInput] = useState ('');

  const sendWork = e => {
    e.preventDefault();
    const newWork = {
      id:uuidv4(),
      text:input,
      completed:false
    }
    console.log(newWork);
    props.onSubmit(newWork);
    setInput('')
  }

  return (
    <form className='input row center' onSubmit={sendWork}>

      <input 
      type='text'
      onChange={(e)=> setInput(e.target.value)}
      value={input}
       />
        <Button size = "">Add homework</Button>

    </form>
    
  )
}

export default Input
