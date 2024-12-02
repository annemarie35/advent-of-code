import { transformArray, readFile, sortAscendant } from '../../src/data-source/data-source'
import dotenv from 'dotenv'

dotenv.config()

describe('Data Source', () => {
    describe('Read file', () => {
        it('Should be able to read file and return an array', async () => {
            const response = await readFile(
                `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-1-test.txt`
            )
            expect(response).toEqual([
                [11022, 61967],
                [54992, 56543]
            ])
        })
    })

    describe('Sort list', () => {
        it('Should be able to sort list of numbers in asc', async () => {
            const positionsIds = [61967, 11022, 21268, 90452, 90728]

            const response = sortAscendant(positionsIds)

            expect(response).toEqual([11022, 21268, 61967, 90452, 90728])
        })
    })

    describe('Transform array', () => {
        it('should transform array', () => {
            const positionsArray = [
                [3, 4, 2, 1, 3, 3],
                [4, 3, 5, 3, 9, 3]
            ]

            const totalDistance = transformArray(positionsArray)

            expect(totalDistance).toEqual([
                [3, 4],
                [4, 3],
                [2, 5],
                [1, 3],
                [3, 9],
                [3, 3]
            ])
        })
    })
})
