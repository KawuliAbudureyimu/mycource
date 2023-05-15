import React from 'react'

interface Props{
    children:string;
    onClick:()=> void;
    color:string;
}
const Button = ({children, onClick}: Props) => {
  return (
    <button className={' color'} onClick={onClick}>{children}</button>
  )
}

export default Button