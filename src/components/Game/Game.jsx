import { useState } from 'react'
import Board from '../Board/Board'

function Game() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)



  function handlePlay(index) {

    if (squares[index]) {
      return
    }

    const newSquares = [...squares]

    if (xIsNext) {
      newSquares[index] = 'X'
    } else {
      newSquares[index] = 'O'
    }

    setSquares(newSquares)

    setXIsNext(!xIsNext)
  }



  
  return (
    <div>

      <h1>Jogo da Velha</h1>

      <h2>
        Vez do jogador: {xIsNext ? 'X' : 'O'}
      </h2>

      <Board
        squares={squares}
        onPlay={handlePlay}
      />

    </div>
  )
}

export default Game