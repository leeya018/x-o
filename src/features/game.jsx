import React, { useState, useEffect } from "react";
import Board from "@/ui/board";

export const turnEnum = {
  x: "X",
  o: "O",
};

const initialItems = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
export const GameContext = React.createContext();

export function Game({}) {
  const [items, setItems] = useState(initialItems);
  const [turn, setTurn] = useState(turnEnum.x);
  const [winner, setWinner] = useState("");
  const [isBoardFull, setIsBoardFull] = useState(false);

  // useEffect(() => {
  // is that the rigth way to do it ?
  //  do I have to use the state?
  // setIsBoardFull(checkIfBoardIsFull());
  //checkIfWin()
  // }, [items]);

  // function restartGame() {
  //   setItems(initialItems);
  //   setTurn(turnEnum.x);
  //   setWinner("");
  // }

  // console.log({ winner: winner !== "", isBoardFull });

  // is there any other componets that I can extract in this stage or not?
  return (
    <GameContext.Provider
      value={{
        items,
        updateItems: setItems,
        turn,
        updateTurn: setTurn,
        // checkWin,
        setWinner,
        winner,
      }}
    >
      <div className=" select-none flex flex-col justify-center items-center w-full h-full bg-red-300">
        <button
          className={`${
            winner !== "" || isBoardFull ? "visible" : "invisible"
          } px-3 py-2 font-bold text-xl border-2 border-black rounded-md bg-blue-600 hover:bg-blue-400 `}
          // onClick={restartGame}
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
