export const winnerGame = (square) =>{
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]

    for (let index = 0; index < lines.length; index++) {
        const [a,b,c] = lines[index]
        if(square[a] && square[a] === square[b] && square[a] === square[c]){
            return {player:square[a], playin: [parseInt(a)+1,parseInt(b)+1,parseInt(c)+1]}
        }
    }
    return null

}