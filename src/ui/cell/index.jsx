import { useContext } from "react";
import { GameContext } from "@/features/game";

export default function Cell({ item, onClick }) {
  return (
    <div
      className="border-2 border-black flex justify-center items-center"
      onClick={onClick}
    >
      {item}
    </div>
  );
}
