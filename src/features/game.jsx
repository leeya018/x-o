import React, { useState, useEffect } from "react";
import Cell from "@/ui/cell";

export function Game({}) {
  const [items, setItems] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  useEffect(() => {
    console.log("render use effect");
    if (checkWin()) {
      setWinner(turn);
    }
  }, [items]);

  const handleClick = (num) => {
    if (items[num] !== "" || winner) return;
    let newItems = [...items];

    newItems[num] = turn;
    setItems(newItems);

    turn == "X" ? setTurn("O") : setTurn("X");
  };

  const checkWin = () => {
    const combos = {
      rows: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      cols: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      cross: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (const key in combos) {
      for (const combo of combos[key]) {
        if (
          items[combo[0]] === items[combo[1]] &&
          items[combo[1]] === items[combo[2]] &&
          items[combo[2]] !== ""
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const isFull = () => {
    return items.every((item) => item !== "");
  };
  const restartGame = () => {
    setItems(Array(9).fill(""));
    setTurn("X");
    setWinner("");
  };

  return (
    <div className=" select-none flex flex-col justify-center items-center w-full h-full bg-red-300">
      <h1>tic tac toe game</h1>
      <span className="font-bold text-lg">{`turn of ${turn}`}</span>
      {(winner || isFull()) && (
        <button
          className="px-3 py-2 font-bold text-xl border-2 border-black rounded-md bg-blue-600 hover:bg-blue-400 mt-3"
          onClick={restartGame}
        >
          restart
        </button>
      )}
      <div className="w-[50%] h-20 flex justify-center items-center font-bold text-5xl text-blue-500 border-none">
        {winner !== "" && <span>{`winner is ${winner}`}</span>}
      </div>
      <div className=" grid gap-2 bg-black grid-cols-3 grid-rows-3 w-96 h-96">
        {items.map((item, index) => (
          <Cell key={index} item={item} onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
}
