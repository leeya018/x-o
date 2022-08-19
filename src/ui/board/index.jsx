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

  function draw(chosenId, getIdFunct) {
    let cellId = getIdFunct();
    const newItems = items.map((row) =>
      row.map((cell) => (chosenId == cellId ? turn : cell))
    );
    updateItems(newItems);
  }

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
