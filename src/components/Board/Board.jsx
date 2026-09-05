import Square from "../Square/Square";

// Função para calcular se houve vencedor
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board({ xIsNext, squares, onPlay, playerX, playerO }) {
  function handleClick(i) {
    // Não deixa clicar se já houver vencedor ou se a casa estiver ocupada
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Copia o array de casas e adiciona a jogada
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";

    // Envia a jogada para o componente principal
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  // Mensagem informando quem joga ou quem venceu
  let status;
  if (winner) {
    const winnerName = winner === "X" ? playerX : playerO;
    status = "🎉 Vencedor: " + winnerName;
  } else if (isDraw) {
    status = "🤝 Empate!";
  } else {
    const currentPlayer = xIsNext ? playerX : playerO;
    status = "Vez de: " + currentPlayer + " (" + (xIsNext ? "X" : "O") + ")";
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}