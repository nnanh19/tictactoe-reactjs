import React, { useState } from 'react'
import { winnerGame } from '../../ultis/tictoktoe'
import Board from './board'

const Game = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xPlayer, setXPlayer] = useState(true)

    const onHandlePlay = (index) =>{
        const squares2 = [...squares]
        squares2[index] = xPlayer ? 'X' : 'O'
        setXPlayer(!xPlayer)
        return setSquares(squares2)
    }
    
    const handReset = () => {
        setSquares(Array(9).fill(null))
    }
  return (
    <div>
        {winnerGame(squares) && <button onClick={handReset}>Reset game</button>}
        <Board handlePlay={onHandlePlay} squares={squares}/>
        <p>{winnerGame(squares) && `Người chơi ${winnerGame(squares)} chiến thắng!`}</p>
    </div>
  )
}

export default Game