import React, { useState, useEffect } from "react";
import PuzzleGrid from "./PuzzleGrid";
import GridInput from "./GridInput";

export default function App() {
  const [inputSize, setInputSize] = useState(3);
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [startTiles, setStartTiles] = useState([1, 0, 3, 4, 2, 5, 6, 7, 8]);
  const [goalTiles, setGoalTiles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 0]);
  const [solution, setSolution] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (solution.length > 0 && stepIndex < solution.length - 1) {
      const timer = setTimeout(() => setStepIndex(stepIndex + 1), 500);
      return () => clearTimeout(timer);
    }
  }, [stepIndex, solution]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch("https://tile-puzzle-solver.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rows,
          cols,
          start: startTiles,
          goal: goalTiles,
        }),
      });
  
      if (!res.ok) {
        throw new Error("Server error. Please check your input.");
      }
  
      const data = await res.json();
      setSolution(data.solution.map((step) => step.state));
      setStepIndex(0);
    } catch (error) {
      alert("Error solving puzzle: " + error.message);
    }
    
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-screen">
      <h1 className="text-3xl font-bold mb-6 text-black text-center">
        Tile Puzzle Solver
      </h1>

      {/* Two-column layout */}
      <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto w-full items-start">
        {/* Left Column: Form */}
        <div className="space-y-4 px-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left">
              <label className="text-lg font-semibold mb-2 text-black">
                Select Number of Rows and Columns
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="number"
                  min="2"
                  max="10"
                  value={inputSize}
                  onChange={(e) => setInputSize(e.target.value)}
                  placeholder="e.g. 3"
                  className="w-24 p-2 border rounded"
                />
                <button
                  type="button"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    const size = inputSize * inputSize;
                    setRows(inputSize);
                    setCols(inputSize);
                    setStartTiles(Array(size).fill(0));
                    setGoalTiles(Array(size).fill(0));
                    window.scrollTo(0,0);
                    setSolution([]);
                    setStepIndex(0);
                  }}
                >
                  Confirm Dimensions
                </button>
              </div>
            </div>

            <GridInput
              title="Start State"
              tiles={startTiles}
              setTiles={setStartTiles}
              rows={rows}
              cols={cols}
            />
            <GridInput
              title="Goal State"
              tiles={goalTiles}
              setTiles={setGoalTiles}
              rows={rows}
              cols={cols}
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Solve
            </button>
          </form>
        </div>

        {/* Right Column: Puzzle Output */}
        <div className="flex flex-col items-center justify-center bg-white rounded shadow p-6 border-l min-h-full border-gray-300">
          {solution.length > 0 ? (
            <>
              <p className="text-gray-600 mb-4">
                Step {stepIndex + 1} of {solution.length}
              </p>
              <PuzzleGrid tiles={solution[stepIndex]} rows={rows} cols={cols} />
            </>
          ) : (
            <p className="text-gray-400 text-lg mt-20">
              Solution will appear here after clicking <strong>"Solve"</strong>.
            </p>
          )}
        </div>
      </div>
    </div>
  );

}
