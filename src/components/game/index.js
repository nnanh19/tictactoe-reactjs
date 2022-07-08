import React, { useState } from 'react'
import { winnerGame } from '../../ultis/tictoktoe'
import Board from './board'

const Game = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xPlayer, setXPlayer] = useState(true)
    const [resetGame, setResetGame] = useState(false)
    const [counter, setCounter] = useState(0)
    const onHandlePlay = (index) =>{
        const squares2 = [...squares]
        

        if(squares2[index] === null){
            squares2[index] = xPlayer ? 'X' : 'O'
            setXPlayer(!xPlayer)
            setSquares(squares2)
            setCounter(counter+1)
            if(counter >= 8){
                setResetGame(!resetGame)
            }
        }
    }
    
  
    const handReset = () => {
        setSquares(Array(9).fill(null))
    }
    const resultPlay = winnerGame(squares)
  return (
    <div>
        {winnerGame(squares) || resetGame ? <button onClick={handReset}>Reset game</button>:''}
        <Board handlePlay={onHandlePlay} squares={squares} winner={resultPlay?.playin}/>
        <p>{winnerGame(squares) && `Người chơi ${resultPlay?.player+1} chiến thắng`}</p>
        <p>{winnerGame(squares) && `Ô ${resultPlay?.playin}! `}</p>
    </div>
  )
}

export default Game