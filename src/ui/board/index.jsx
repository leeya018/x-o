import { useContext, useEffect } from "react";
import { GameContext, turnEnum } from "@/features/game";
import Cell from "@/ui/cell";
let cellId = 0;

export default function Board({}) {
  const context = useContext(GameContext);
  const { items, updateItems, turn, updateTurn, checkWin, setWinner } = context;

  // useEffect(() => {
  //   if (checkWin()) {
  //     // why is that happend
  //     setWinner(turn == turnEnum.x ? turnEnum.o : turnEnum.x);
  //   }
  // }, [items]);

  function draw(id) {
    const newItems = items.filter((item) => (item.id == id ? turn : item));
    // updateItems(newItems);
  }
  console.log(items);
  console.log(items[0].length);

  return (
    <div className="grid gap-2 bg-black grid-cols-3 grid-rows-3 w-96 h-96">
      {items.map((row) => {
        return row.map((cell) => {
          console.log(cell);
          console.log("cell");
          cellId += 1;
          // console.log(cellId);
          return <Cell key={cellId} cell={cell} draw={() => draw(cellId)} />;
        });
      })}
    </div>
  );
}
