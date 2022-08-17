import { useContext } from "react";
import { GameContext } from "@/features/game";

export default function Cell({ item, draw }) {
  const { winner } = useContext(GameContext);
  console.log(winner + " we are on the cell comp");
  return (
    <div
      className="flex justify-center items-center font-bold text-6xl"
      onClick={() => {
        if (!winner) draw(item.id);
      }}
    >
      {item.init}
    </div>
  );
}
