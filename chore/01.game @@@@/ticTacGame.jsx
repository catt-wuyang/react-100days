/**
 * 井字棋游戏
 */
import "./style.css";
import { useState } from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClick(props.index)}>
      {props.value}
    </button>
  );
};

const Game = () => {
  const defaultSquares = Array(9).fill(null);
  const [history, setHistory] = useState([{ squares: defaultSquares }]);
  const [isX, setIsX] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  // const [squares, setSquares] = useState(defaultSquares); // 九宫格每个值的数组集合

  // 下一步应该谁走
  // const status = isX ? "X" : "O";

  // const [isEnd, setIsEnd] = useState(false); // 游戏结束

  const renderSquare = (i) => {
    // return <Square value={squares[i]} index={i} onClick={clickHandle} />;
    return <p></p>;
  };

  const clickHandle = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (getWinner(squares) || squares[i]) {
      return false;
    }
    squares[i] = isX ? "X" : "O";
    setHistory(newHistory.concat([{ squares: squares }]));
    setStepNumber(newHistory.length);
    setIsX(!isX);
  };

  const getWinner = (squares) => {
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
  };

  // const clickHandle = (i) => {
  //   if (isEnd) {
  //     return false;
  //   }

  //   const newHistory = history.slice(0, stepNumber + 1);

  //   const newSquares = squares.slice(); // 浅拷贝 返回新对象
  //   newSquares[i] = isX ? "X" : "O";
  //   setSquares(newSquares);
  //   setIsX(!isX);

  //   const winner = getWinner(newSquares);
  //   if (winner || squares[i]) {
  //     setTimeout(() => {
  //       alert(`游戏结束，获胜者是${winner}`);
  //     }, 500);
  //     setIsEnd(true);
  //     return false;
  //   }
  // };

  const jumpTo = (step) => {
    setStepNumber(step);
    setIsX(step % 2 === 0);
  };

  const newHistory = history;
  const current = newHistory[stepNumber];
  const winner = getWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? `go to move #{move}` : `game start`;
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner:" + winner;
  } else {
    status = "Next player:" + isX ? "X" : "O";
  }

  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      <div className="game-info">
        <div className="status">{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;

// 1. history 列表，每步的坐标
// 在游戏历史记录列表显示每一步棋的坐标，格式为 (列号, 行号)。
// 在历史记录列表中加粗显示当前选择的项目。
// 使用两个循环来渲染出棋盘的格子，而不是在代码里写死（hardcode）。
// 添加一个可以升序或降序显示历史记录的按钮。
// 每当有人获胜时，高亮显示连成一线的 3 颗棋子。
// 当无人获胜时，显示一个平局的消息。

// const checkWin = [
//   [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//   ],
//   [
//     [0, 1, 2],
//     [1, 4, 7],
//   ],
//   [
//     [0, 1, 2],
//     [2, 5, 8],
//   ],
//   [
//     [0, 3, 6],
//     [3, 4, 5],
//   ],
//   [
//     [1, 4, 7],
//     [3, 4, 5],
//     [0, 4, 8],
//     [2, 4, 6],
//   ],
//   [
//     [2, 5, 8],
//     [3, 4, 5],
//   ],
//   [
//     [0, 3, 6],
//     [6, 7, 8],
//     [2, 4, 6],
//   ],
//   [
//     [1, 4, 7],
//     [6, 7, 8],
//   ],
//   [
//     [2, 5, 8],
//     [6, 7, 8],
//   ],
// ];
