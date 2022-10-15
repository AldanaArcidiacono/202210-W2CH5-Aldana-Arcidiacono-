const board = [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
];

const killTheCell = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                if (
                    (array[i - 1][j] === 0 && array[i + 1][j] === 0) ||
                    (array[i][j - 1] === 0 && array[i][j + 1] === 0)
                ) {
                    array[i][j] = 0;
                }
            }
        }
        // Que itere y compare verticalemente el elemento del array
        // if (array[i] === 1) {
        //     if (array[i - 1] === 0 && array[i + 1] === 0) {
        //         array[i] = 0;
        //     }
        // }
    }
    return array;
};
console.log(killTheCell(board));
