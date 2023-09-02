import React from 'react'
import Wrapper from './style'

const Button = ({type, value, method}) => {
  return <Wrapper type={type} value={value} onClick={method} />
}

export default Button
