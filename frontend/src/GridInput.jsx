import React from "react";

export default function GridInput({ title, tiles, setTiles, rows, cols }) {
  const handleChange = (index, value) => {
    const newTiles = [...tiles];
    const numericValue = parseInt(value, 10);
    newTiles[index] = isNaN(numericValue) ? 0 : numericValue;
    setTiles(newTiles);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 text-black">{title}</h2>
      <div
        className="grid gap-0"
        style={{
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {tiles.map((tile, index) => (
          <input
            key={index}
            type="number"
            min="0"
            max="20"
            className="w-16 h-16 text-center border rounded shadow"
            value={tile}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}
