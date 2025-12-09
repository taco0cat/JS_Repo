// 2D Arrays
// Good for matrix or grid of data

// Do not need to be uniform
const matrix = [[0, 1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                ["*", 0, "#"]]

matrix[2][0] = "X"
matrix[2][1] = "0"
matrix[2][2] = "X"

console.log(matrix)

for (let row of matrix){
    const rowString = row.join(" ")
    console.log(rowString)
}