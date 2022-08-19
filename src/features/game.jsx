import React, { useState, useEffect } from "react";
export function Game({}) {
  const [items, setItems] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("x");

  const Cell = ({ num }) => {
    const handleClick = () => {
      if (items[num] !== "") return;
      let newItems = [...items];

      newItems[num] = turn;
      setItems(newItems);

      turn == "x" ? setTurn("y") : setTurn("x");
    };
    return (
      <div
        className="border-2 border-black flex justify-center items-center"
        onClick={handleClick}
      >
        {items[num]}
      </div>
    );
  };
  console.log(items);

  const checkWin = () => {
    combos = {
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
  };
  return (
    <div className="contianer flex justify-center">
      <div className=" grid grid-rows-3 grid-cols-3 gap-1 w-32 h-32">
        <Cell num={0} />
        <Cell num={1} />
        <Cell num={2} />
        <Cell num={3} />
        <Cell num={4} />
        <Cell num={5} />
        <Cell num={6} />
        <Cell num={7} />
        <Cell num={8} />
      </div>
    </div>
  );
}
