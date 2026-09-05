import { useState } from "react";
import Board from "../Board/Board";
import styles from "./Game.module.css";

// Função para conferir vencedor e somar o ponto no placar
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

export default function Game() {
  // Estado para controlar se a partida começou (false = mostra tela inicial)
  const [gameStarted, setGameStarted] = useState(false);

  // Guardar os nomes inseridos nas perguntas iniciais
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  // Guardar a pontuação de cada jogador
  const [scores, setScores] = useState({ x: 0, o: 0 });

  // Estados originais do histórico do professor
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // Função disparada ao enviar o formulário inicial
  function handleStartGame(e) {
    e.preventDefault(); // Impede a página de recarregar
    if (playerX.trim() !== "" && playerO.trim() !== "") {
      setGameStarted(true); // Exibe o tabuleiro
    }
  }

  // Registra uma nova jogada
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    // Se houve vencedor, adiciona no placar
    const winner = calculateWinner(nextSquares);
    if (winner === "X") setScores((prev) => ({ ...prev, x: prev.x + 1 }));
    if (winner === "O") setScores((prev) => ({ ...prev, o: prev.o + 1 }));
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Começa um novo jogo mantendo o placar atual
  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  // Zera os pontos e reinicia o tabuleiro
  function resetAll() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setScores({ x: 0, o: 0 });
  }

  // Voltar para a tela das perguntas
  function backToSetup() {
    setGameStarted(false);
    resetAll();
  }

  // TELA 1: PERGUNTAS INICIAIS
  if (!gameStarted) {
    return (
      <div className={styles.setupCard}>
        <h2>Jogo da Velha</h2>
        <p>Preencha os nomes para começar a jogar:</p>

        <form onSubmit={handleStartGame} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Qual o nome do Jogador 1 (X)?</label>
            <input
              type="text"
              placeholder="Digite o nome..."
              value={playerX}
              onChange={(e) => setPlayerX(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Qual o nome do Jogador 2 (O)?</label>
            <input
              type="text"
              placeholder="Digite o nome..."
              value={playerO}
              onChange={(e) => setPlayerO(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.startBtn}>
            Começar Partida 🎮
          </button>
        </form>
      </div>
    );
  }

  // TELA 2: TABULEIRO DE JOGO
  const moves = history.map((_, move) => {
    const description = move > 0 ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      {/* Área do tabuleiro */}
      <div className={styles.gameBoard}>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          playerX={playerX}
          playerO={playerO}
        />
      </div>

      {/* Painel lateral */}
      <div className={styles.gameInfo}>
        {/* Placar */}
        <div className={styles.scoreboard}>
          <div className={styles.scoreBox}>
            <span>{playerX} (X)</span>
            <strong>{scores.x}</strong>
          </div>
          <span className={styles.divider}>:</span>
          <div className={styles.scoreBox}>
            <span>{playerO} (O)</span>
            <strong>{scores.o}</strong>
          </div>
        </div>

        {/* Botões de controle */}
        <div className={styles.actions}>
          <button onClick={resetGame}>Próxima Partida</button>
          <button onClick={resetAll}>Zerar Placar</button>
          <button onClick={backToSetup}>Trocar Jogadores</button>
        </div>

        {/* Histórico */}
        <ol>{moves}</ol>
      </div>
    </div>
  );
}