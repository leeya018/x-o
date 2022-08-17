import React, { useState, useEffect } from "react";
import Board from "@/ui/board";
import { v4 as uuidv4 } from "uuid";

const initialItems = [
  [
    {
      id: uuidv4(),
      init: "",
    },
    {
      id: uuidv4(),
      init: "",
    },
    {
      id: uuidv4(),
      init: "",
    },
  ],
  [
    {
      id: uuidv4(),
      init: "",
    },
    {
      id: uuidv4(),
      init: "",
    },
    {
      id: uuidv4(),
      init: "",
    },
  ],
  [
    {
      id: uuidv4(),
      init: "",
    },
    {
      id: uuidv4(),
      init: "",
    },
    {
      id: uuidv4(),
      init: "",
    },
  ],
];

export const turnEnum = {
  x: "X",
  o: "O",
};
console.log(initialItems);

export const GameContext = React.createContext();

export function Game({}) {
  const [items, setItems] = useState(initialItems);
  const [turn, setTurn] = useState(turnEnum.x);
  const [winner, setWinner] = useState("");
  const [isBoardFull, setIsBoardFull] = useState(false);

  useEffect(() => {
    // is that the rigth way to do it ?
    //  do I have to use the state?
    checkIfBoardIsFull();
  }, [items]);

  // is there any way to check those functions in more easy way?
  // not using any for loopes, just reduce filter map every ...etc
  function checkDiagnols() {
    let diagnol1 = [];
    let diagnol2 = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[0].length; j++) {
        if (i == j) diagnol1.push(items[i][j]);
        if (i + j == 2) diagnol2.push(items[i][j]);
      }
    }
    let isSame1 = diagnol1.every(
      (item) => item.init == items[0][0].init && items[0][0].init !== ""
    );
    let isSame2 = diagnol2.every(
      (item) => item.init == items[0][2].init && items[0][2].init !== ""
    );
    return isSame1 || isSame2;
  }
  function checkRows() {
    let isWin = false;
    for (const arr of items) {
      isWin =
        isWin ||
        arr.every((item) => item.init == arr[0].init && arr[0].init !== "");
    }
    return isWin;
  }

  function checkCols() {
    let isWin = false;
    let col = [];
    let j = 0;
    for (let i = 0; i < items.length; i++) {
      for (j = 0; j < items[0].length; j++) {
        col.push(items[j][i]);
      }
      isWin =
        isWin ||
        col.every((item) => item.init == col[0].init && col[0].init !== "");
      col = [];
    }
    return isWin;
  }
  function checkWin() {
    return checkDiagnols() || checkRows() || checkCols();
  }

  function restartGame() {
    setItems(initialItems);
    setTurn(turnEnum.x);
    setWinner("");
  }
  function checkIfBoardIsFull() {
    console.log("is board full fulction is called ");
    for (const arr of items) {
      for (const item of arr) {
        if (item.init == "") {
          // is this the rigth place to change the state?
          // or should I do that  function pure?
          setIsBoardFull(false);
          return;
        }
      }
    }
    setIsBoardFull(true);
  }

  console.log({ winner: winner !== "", isBoardFull });

  // is there any other componets that I can extract in this stage or not?
  return (
    <GameContext.Provider
      value={{
        items,
        updateItems: setItems,
        turn,
        updateTurn: setTurn,
        checkWin,
        setWinner,
        winner,
      }}
    >
      <div className=" select-none flex flex-col justify-center items-center w-full h-full bg-red-300">
        <button
          className={`${
            winner !== "" || isBoardFull ? "visible" : "invisible"
          } px-3 py-2 font-bold text-xl border-2 border-black rounded-md bg-blue-600 hover:bg-blue-400 `}
          onClick={restartGame}
        >
          restart
        </button>
        <div className="w-[50%] h-20 flex justify-center items-center font-bold text-5xl text-blue-500 border-none">{`${
          winner ? `${winner} is the winner` : ""
        }`}</div>
        <p className="font-bold text-lg mb-5">{`${turn} is playing`}</p>
        <h1 className="font-bold text-2xl mb-2">X-O GAME </h1>

        {/* board */}
        <Board />
        <p className="absolute rigth-2 bottom-2">Author @Lee Yahav</p>
      </div>
    </GameContext.Provider>
  );
}
