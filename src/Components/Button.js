import React from 'react'
import './Styles/Button.css'

function Button(props) {



  return (
    <>
      <button className={props.size == 'sm'? "small" : null} onClick={props.onClick}>{props.children}</button>
    </>
  )
}

export default Button
