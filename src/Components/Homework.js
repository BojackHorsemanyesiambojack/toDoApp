import React from 'react'
import './Styles/Homework.css'
import Button from './Button'
import Vr from './Helpers/Vr'
import Vault from './Icons/Vault'
import Strength from './Icons/Strength'

function Homework({id, text, complete ,deleteWork, completeWork}) {
  return (
    <div className='container'>
        <div className={complete? "homework complete" : "homework"}>
        <h5>{text}</h5>
    </div>
    <div className='img-container'>
    {text.toLowerCase().includes("vault")? <Vault /> : null}
    {text.toLowerCase().includes("strength")? <Strength /> : null}
    </div>
    <div className='buttons'>
    <Button onClick = {() => completeWork(id)}>Completed</Button>
    <Button onClick = {() => deleteWork(id)}>Delete</Button>
    </div>

    </div>
  )
}

export default Homework
