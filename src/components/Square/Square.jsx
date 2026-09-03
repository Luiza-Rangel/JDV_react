import styles from "./Square.module.css";

export default function Square({ value, onSquareClick }) {
  return (
    <button
      className={styles.square} //fa\ o react pegar a classe square
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}