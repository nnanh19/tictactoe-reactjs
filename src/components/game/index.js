import React, { useState } from 'react'
import { winnerGame } from '../../ultis/tictoktoe'
import Board from './board'

const Game = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [xPlayer, setXPlayer] = useState(true)

    const onHandlePlay = (index) =>{
        const squares2 = [...squares]

        if(squares2[index] === null){
            squares2[index] = xPlayer ? 'X' : 'O'
            setXPlayer(!xPlayer)
            setSquares(squares2)
            
        }if(winnerGame(squares2)){
            console.log(squares2,'index');
        }
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