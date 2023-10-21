import { useState } from "react";
import Square from "./components/square";
import "./index.css";

function App() {
  // membuat states untuk elemen parent mengetahui perubahan pada square
  const [squares, setSquares] = useState(Array(9).fill(null));

  // membuat states untuk menentukan giliran jalan antara "x" atau "o"
  const [isNext, setIsNext] = useState(true);

  // membuat function untuk mengubah state ketika di klik
  function onHandleClick(i) {
    // menghentikan function ketika squares index ke i sudah terisi atau pemenang sudah didapatkan
    if (squares[i] || calculate(squares)) return;

    // membuat array baru dari array squares
    const newSquares = squares.slice();

    // memberikan "X" ketika isNext true dan "O" ketika isNext bernilai false serta membalik kondisi isNext
    newSquares[i] = isNext ? "X" : "O";
    setSquares(newSquares);
    setIsNext(!isNext);
  }

  // menampilkan pemenang dan selanjutnya
  const win = calculate(squares);
  let winner = "";
  if (win) {
    winner = "Pemenangnya : " + win;
  } else {
    winner = "Selanjutnya : " + (isNext ? "X" : "O");
  }

  // menampilkan tombol ulang bermain
  let ulang = "";
  if (win) {
    ulang = <a href="">Ingin Bermain Lagi ?</a>;
  } else if (squares.every((element) => element !== null)) {
    ulang = <a href="">Ingin Bermain Lagi ?</a>;
  }

  return (
    <>
      <div className="Judul">
        <p>TicTacToe Game</p>
      </div>
      <div className="score">{winner}</div>
      <div className="container">
        <div className="board">
          <Square value={squares[0]} onHandleClick={() => onHandleClick(0)}></Square>
          <Square value={squares[1]} onHandleClick={() => onHandleClick(1)}></Square>
          <Square value={squares[2]} onHandleClick={() => onHandleClick(2)}></Square>
          <Square value={squares[3]} onHandleClick={() => onHandleClick(3)}></Square>
          <Square value={squares[4]} onHandleClick={() => onHandleClick(4)}></Square>
          <Square value={squares[5]} onHandleClick={() => onHandleClick(5)}></Square>
          <Square value={squares[6]} onHandleClick={() => onHandleClick(6)}></Square>
          <Square value={squares[7]} onHandleClick={() => onHandleClick(7)}></Square>
          <Square value={squares[8]} onHandleClick={() => onHandleClick(8)}></Square>
        </div>
      </div>
      <div className="ulang">{ulang}</div>
    </>
  );
}

// function untuk mengecek apakah kotak sudah terisi dengan elemen yang sama secara horizontal,vertical dan diagonal
function calculate(squares) {
  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // melakukan pengecekan satu per satu dari setiap aturan
  for (let i = 0; i < winner.length; i++) {
    const [a, b, c] = winner[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // mengembalikan false jika dari semua aturan tidak ada yang true
  return false;
}

export default App;
