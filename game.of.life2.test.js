import { gridCreator, secondGrid, checkAliveNeighbors } from './game.of.life2';

describe('Given gridCreator function', () => {
    test('When the parameters and conditions are given, then it should return the array board', () => {
        const expectedResult = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        const result = gridCreator();
        expect(result).toEqual(expectedResult);
    });
});

describe('Given secondGrid function', () => {
    test('When the parameters given is an array, then it should return a copy of it', () => {
        const grid = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        const expectedResult = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        const result = secondGrid(grid);
        expect(result).toStrictEqual(expectedResult);
    });
});

describe('Given checkAliveNeighbors function', () => {
    test('When the parameters given are the coordinates and an array, it should return the amount of alive neighbors', () => {
        const grid = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        const row = 2;
        const column = 1;

        const expectedResult = 1;

        const result = checkAliveNeighbors(row, column, grid);
        expect(result).toBe(expectedResult);
    });
});
