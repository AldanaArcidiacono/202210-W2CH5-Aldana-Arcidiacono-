export const gridCreator = (size = 5) => {
    const myGrid = [];
    for (let i = 0; i < size; i++) {
        const temporaryGrid = [];
        for (let j = 0; j < size; j++) {
            if (i === 2 && (j === 1 || j === 2 || j === 3)) {
                // if (
                //     (i === 2 && (j === 1 || j === 2 || j === 3)) ||
                //     (i === 1 && j === 3) ||
                //     (i === 0 && j === 2)
                // ) {
                temporaryGrid.push(1);
            } else {
                temporaryGrid.push(0);
            }
        }
        myGrid.push(temporaryGrid);
    }
    return myGrid;
};

export const secondGrid = (array) => {
    const arrayOfLife = [];
    for (let i = 0; i < array.length; i++) {
        const temporaryArray = [];
        for (let j = 0; j < array.length; j++) {
            temporaryArray.push(array[i][j]);
        }
        arrayOfLife.push(temporaryArray);
    }
    return arrayOfLife;
};

export const checkAliveNeighbors = (row, column, array) => {
    let upperRow = row - 1;
    let downRow = row + 1;
    let leftColumn = column - 1;
    let rightColumn = column + 1;
    let indexHeigh = array.length - 1;
    let indexWidth = array[0].length - 1;

    if (upperRow === -1) upperRow = indexHeigh;
    if (downRow === indexHeigh + 1) downRow = 0;
    if (leftColumn === -1) leftColumn = indexWidth;
    if (rightColumn === indexWidth + 1) rightColumn = 0;

    let aliveNeighbors = 0;

    if (array[upperRow][leftColumn] === 1) aliveNeighbors++;
    if (array[upperRow][column] === 1) aliveNeighbors++;
    if (array[upperRow][rightColumn] === 1) aliveNeighbors++;
    if (array[row][leftColumn] === 1) aliveNeighbors++;
    if (array[row][rightColumn] === 1) aliveNeighbors++;
    if (array[downRow][leftColumn] === 1) aliveNeighbors++;
    if (array[downRow][column] === 1) aliveNeighbors++;
    if (array[downRow][rightColumn] === 1) aliveNeighbors++;

    return aliveNeighbors;
};

const liveAndLetDie = (array, array2) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            const lifeForms = checkAliveNeighbors(i, j, array);
            if (lifeForms < 2 || lifeForms > 3) {
                array2[i][j] = 0;
            }
            if (lifeForms === 3) {
                array2[i][j] = 1;
            }
        }
    }
};

const gameOfLife = () => {
    let outputGrid = gridCreator();
    let originGrid;

    setInterval(() => {
        originGrid = secondGrid(outputGrid);
        liveAndLetDie(originGrid, outputGrid);
        console.log(outputGrid);
    }, 1000);
};
gameOfLife();
