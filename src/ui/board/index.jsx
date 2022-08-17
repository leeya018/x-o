import { useContext, useEffect } from "react";
import { GameContext, turnEnum } from "@/features/game";
import Cell from "@/ui/cell";

export default function Board({}) {
  const context = useContext(GameContext);
  const { items, updateItems, turn, updateTurn, checkWin, setWinner } = context;

  useEffect(() => {
    if (checkWin()) {
      // why is that happend
      setWinner(turn == turnEnum.x ? turnEnum.o : turnEnum.x);
    }
  }, [items]);

  function draw(id) {
    const newItems = items.map((arr) => {
      return arr.map((item) => {
        if (item.id == id) {
          if (item.init !== "") return item;
          updateTurn(turn == "X" ? turnEnum.o : turnEnum.x);
          return { ...item, init: turn };
        }
        return item;
      });
    });

    updateItems(newItems);
  }
  return (
    <div className="grid gap-2 bg-black grid-cols-3 grid-rows-3 w-96 h-96">
      {items.map((arr) => {
        return arr.map((item) => {
          return <Cell key={item.id} item={item} draw={draw} />;
        });
      })}
    </div>
  );
}
