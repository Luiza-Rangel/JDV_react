import { useState } from "react";
import Board from "../Board/Board";
import styles from "./Game.module.css";

// Função para verificar se houve vencedor (usada também para pontuar)
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  // Histórico de jogadas do tabuleiro atual
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  // 🏆 NOVO: Estado do Placar (guarda as vitórias de X e O)
  const [scores, setScores] = useState({ x: 0, o: 0 });

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    // 🏆 NOVO: Verifica se a jogada atual gerou um vencedor e soma o ponto
    const winner = calculateWinner(nextSquares);
    if (winner === "X") {
      setScores((prev) => ({ ...prev, x: prev.x + 1 }));
    } else if (winner === "O") {
      setScores((prev) => ({ ...prev, o: prev.o + 1 }));
    }
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // ⏩ NOVO: Próxima Partida (Inicia um novo tabuleiro mantendo o placar)
  function handleNextGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  // 🔄 NOVO: Zerar Placar (Limpa o tabuleiro E zera os pontos)
  function handleResetAll() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setScores({ x: 0, o: 0 });
  }

  // Botões do histórico de jogadas
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Ir para jogada #" + move;
    } else {
      description = "Início da partida";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} className={styles.historyBtn}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className={styles.game}>
      {/* Área do Tabuleiro */}
      <div className={styles.gameBoard}>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>

      {/* Área das Informações, Placar e Controles */}
      <div className={styles.gameInfo}>
        
        {/* 🏆 PLACAR */}
        <div className={styles.scoreboard}>
          <div className={styles.scoreBox}>
            <span className={styles.playerLabel}>Jogador X</span>
            <span className={styles.scoreValue}>{scores.x}</span>
          </div>
          <div className={styles.scoreDivider}>:</div>
          <div className={styles.scoreBox}>
            <span className={styles.playerLabel}>Jogador O</span>
            <span className={styles.scoreValue}>{scores.o}</span>
          </div>
        </div>

        {/* 🔘 BOTÕES DE AÇÃO */}
        <div className={styles.actions}>
          <button 
            className={styles.nextGameBtn} 
            onClick={handleNextGame}
          >
            🎮 Próxima Partida
          </button>

          <button 
            className={styles.resetBtn} 
            onClick={handleResetAll}
          >
             Zerar Placar
          </button>
        </div>

        {/*  HISTÓRICO DE JOGADAS */}
        <h3>Histórico</h3>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}