import styles from "./Square.module.css";

// Componente simples de cada botão do tabuleiro
export default function Square({ value, onSquareClick }) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}