const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

export const killTheCell = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                if (array[i][j - 1] === 1 && array[i][j + 1] === 1) {
                    array[i][j - 1] = 0;
                    array[i][j + 1] = 0;
                }
                if (array[i - 1][j] === 1 && array[i + 1][j] === 1) {
                    array[i - 1][j] = 0;
                    array[i + 1][j] = 0;
                }
            }
        }
    }
    return array;
};

export const reviveTheCell = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                if (array[i][j - 1] === 0 && array[i][j + 1] === 0) {
                    array[i][j - 1] = 1;
                    array[i][j + 1] = 1;
                }
                if (array[i - 1][j] === 0 && array[i + 1][j] === 0) {
                    array[i - 1][j] = 1;
                    array[i + 1][j] = 1;
                }
                if (array[i][j] === 1) {
                    if (array[i][j - 1] === 1 && array[i][j + 1] === 1) {
                        array[i][j - 1] = 0;
                        array[i][j + 1] = 0;
                    }
                }
            }
        }
    }
    return array;
};

// setInterval(() => {
//     gameOfLife();
// }, 1000);

// const gameOfLife = () => {
//     console.table(board);
//     const deadCells = killTheCell(board);
//     console.table(reviveTheCell(deadCells));
// };
// gameOfLife();
