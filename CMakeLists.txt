cmake_minimum_required(VERSION 3.4)
project(astar_module)

add_subdirectory(pybind11)
pybind11_add_module(astar_module astar_bindings.cpp PuzzleState.cpp Astar.cpp)
