import astar_module

# Define a 3x3 puzzle (standard 8-puzzle)
start = [1, 2, 3,
         4, 0, 5,
         6, 7, 8]

goal = [1, 2, 3,
        4, 5, 8,
        6, 7, 0]

solution = astar_module.solve_astar(start, goal, 3, 3)

print("Solution path:")
for state in solution:
    for i in range(0, len(state), 3):
        print(state[i:i+3])
    print()
