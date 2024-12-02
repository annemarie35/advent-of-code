import dotenv from 'dotenv'

dotenv.config()
import { readFile, sortAscendant } from '../../src/data-source/data-source'

describe('Data Source', () => {
    describe('Read file', () => {
        it('Should be able to read file and return an array', async () => {
            const response = await readFile(
                `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-1-test.txt`
            )
            expect(response).toEqual([
                [61967, 11022],
                [56543, 54992]
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
})
