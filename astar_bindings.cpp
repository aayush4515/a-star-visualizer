#include <pybind11/pybind11.h>
#include <pybind11/stl.h>
#include "PuzzleState.h"
#include "PuzzleMove.h"
#include "Astar.h"
#include <cstring>
#include <string.h>

using namespace std;

namespace py = pybind11;

PYBIND11_MODULE(astar_module, m) {
    m.doc() = "A* search binding for sliding puzzle";

    m.def("solve_astar", [](std::vector<int> start_tiles, std::vector<int> goal_tiles, int rows, int cols) {
        PuzzleState start(rows, cols);
        PuzzleState goal(rows, cols);

        start.setTiles(start_tiles);
        goal.setTiles(goal_tiles);

        std::vector<std::vector<int>> solution = Astar(start, goal);  // <- this should return the full path

        return solution;
    });
}
