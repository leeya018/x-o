import { useContext } from "react";
import { GameContext } from "@/features/game";

export default function Cell({ id, cell, draw }) {
  const { winner } = useContext(GameContext);

  return (
    <div
      className="cursor-pointer bg-blue-600 flex justify-center items-center font-bold text-6xl
      hover:bg-blue-400"
      onClick={() => {
        // if (!winner) draw();
        draw(id);
      }}
    >
      {cell}
    </div>
  );
}
