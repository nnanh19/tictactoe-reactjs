import React from 'react'
import styled from 'styled-components'

const Square = ({handleClick, value}) => {
  const color = () => {
    if(value === 'X'){
      return 'red'
    }
    return 'blue'
  }
  return (
    <StyleSquare onClick={handleClick} color={color}>
        {value}
    </StyleSquare>
  )
}

const StyleSquare = styled.div `
    min-width: 100px;
    min-height: 100px;
    border: 1px solid black;
    font-size: 2rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    font-weight: bold;
    color: ${({color}) => color}
`

export default Square