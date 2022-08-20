import { useContext } from "react";
import { GameContext } from "@/features/game";

export default function Cell({ item, onClick }) {
  return (
    <div
      className="cursor-pointer bg-blue-600 flex justify-center items-center font-bold text-6xl
      hover:bg-blue-400"
      onClick={onClick}
    >
      {item}
    </div>
  );
}
