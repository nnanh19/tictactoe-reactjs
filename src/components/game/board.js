import React from 'react'
import Square from './square'
import styles from './game.module.css'
import styled from 'styled-components'


const Board = ({handlePlay,squares,winner}) => {
    console.log(winner);    
  return (
    <div className={styles.boardContainer}>
       <StyleBoardBox>
            {squares.map((square,index) => 
                {
                    console.log(index)
                    return(
                        <Square key={index} handleClick={() => handlePlay(index)} value={square} />
                    )
                }
            )}
       </StyleBoardBox>
    </div>
  )
  
}

const StyleBoardBox = styled.div `
    display: flex;
    flex-wrap: wrap;
    grid-gap: 1px;
    background-color: white;
`

export default Board