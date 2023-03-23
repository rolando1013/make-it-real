import React from 'react'

export const Button = ({clickado, text}) => {
  return (
    <button onClick={clickado}>{text}</button>
    )
}
