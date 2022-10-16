import { killTheCell, reviveTheCell } from './game.of.life.js';

describe('Given killTheCell function', () => {
    test('When the parameter is an array, then the cell with neighbors should die', () => {
        const board = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        const expectedResult = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        const result = killTheCell(board);
        expect(result).toEqual(expectedResult);
    });
});

describe('Given reviveTheCell function', () => {
    test('When the parameter is the array that the previous function returns, then the cell with should revive', () => {
        const deadCells = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ];

        const expectedResult = [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
        ];
        const result = reviveTheCell(deadCells);
        expect(result).toEqual(expectedResult);
    });
});
