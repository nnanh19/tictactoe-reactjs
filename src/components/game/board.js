import React from 'react'
import Square from './square'
import styles from './game.module.css'


const Board = ({handlePlay, squares}) => {

  return (
    <div className={styles.boardContainer}>
       <div className={styles.boardBox}>
            {squares.map((square,index) => 
                <Square key={index} handleClick={() => handlePlay(index)} value={square}/>
            )}
       </div>
    </div>
  )
}

export default Board