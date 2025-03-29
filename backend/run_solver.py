from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import astar_module
import uvicorn

app = FastAPI()

class PuzzleRequest(BaseModel):
    rows: int
    cols: int
    start: list[int]
    goal: list[int]

class Step(BaseModel):
    move: str
    state: list[int]

class PuzzleResponse(BaseModel):
    solution: list[Step]

@app.post("/solve")
def solve_puzzle(puzzle: PuzzleRequest):
    try:
        solution = astar_module.solve_astar(puzzle.start, puzzle.goal, puzzle.rows, puzzle.cols)

        response = {
            "solution": [
                {"move": "step", "state": state}
                for state in solution
            ]
        }
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run with: 'python3 run_solver.py'
if __name__ == "__main__":
    uvicorn.run("run_solver:app", host="127.0.0.1", port=8000, reload=True)
