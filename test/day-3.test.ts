import dotenv from 'dotenv'
import { solveDay3, solveDay3SecondPart } from '../src/day-3'

dotenv.config()

describe('Compute results with valid instructions program', () => {
    it('should return 161 as example given', async () => {
        const result = await solveDay3(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-3-test.txt`
        )

        expect(result).toEqual(161)
    })
})

describe('Compute results with valid instructions program', () => {
    it('should return 48 as example given', async () => {
        const result = await solveDay3SecondPart(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-3-2-test.txt`
        )

        expect(result).toEqual(48)
    })

    it('should return 26400432 as example given', async () => {
        const result = await solveDay3SecondPart(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-3-2B-test.txt`
        )

        expect(result).toEqual(26400432)
    })
})
