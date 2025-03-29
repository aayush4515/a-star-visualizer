import React from "react";

const PuzzleGrid = ({ tiles, rows, cols }) => {
  return (
    <div
      className="grid gap-1 mx-auto"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        width: "fit-what docontent",
      }}
    >
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`w-16 h-16 flex items-center justify-center text-xl font-bold rounded shadow-md
            ${
              tile === 0
                ? "bg-gray-300 text-gray-300"
                : "bg-blue-500 text-white"
            }`}
        >
          {tile === 0 ? "" : tile}  {/* if value of tile is 0, render an empty string, else render the actual tile number */}
        </div>
      ))}
    </div>
  );
};

export default PuzzleGrid;
