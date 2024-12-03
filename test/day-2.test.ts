import dotenv from 'dotenv'
import { solveDay2, solveDay2SecondPart } from '../src/day-2'

dotenv.config()

describe('Count how many reports are safe', () => {
    it('should return 2 as example given', async () => {
        const totalSafeReports = await solveDay2(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-2-test.txt`
        )

        expect(totalSafeReports).toEqual(2)
    })
})

describe('Count how many reports are safe including the one tolerated', () => {
    it('should return 4 as example given', async () => {
        const totalSafeReportsWithTolerate = await solveDay2SecondPart(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-2-test.txt`
        )
        expect(totalSafeReportsWithTolerate).toEqual(4)
    })
})
