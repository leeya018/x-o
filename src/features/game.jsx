import React, { useState, useEffect } from "react";
import Cell from "@/ui/cell";

export function Game({}) {
  const [items, setItems] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("x");
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

    turn == "x" ? setTurn("y") : setTurn("x");
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
    setTurn("x");
    setWinner("");
  };

  return (
    <div className="contianer flex flex-col items-center">
      {(winner || isFull()) && (
        <button
          className="border-2 border-black rounded-md"
          onClick={restartGame}
        >
          restart
        </button>
      )}
      <div className=" grid grid-rows-3 grid-cols-3 gap-1 w-32 h-32">
        {items.map((item, index) => (
          <Cell key={index} item={item} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div>{winner !== "" && <span>{`winner is ${winner}`}</span>}</div>
    </div>
  );
}
