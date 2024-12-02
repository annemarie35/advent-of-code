import { solveDay1, solveDay2 } from '../src/day-1'
import dotenv from 'dotenv'

dotenv.config()

describe('computeTotalDistance', () => {
    it('should return 11 as example given', async () => {
        const totalDistance = await solveDay1(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-1-example.txt`
        )

        expect(totalDistance).toEqual(11)
    })
})

describe('computeTotalSimilarityScore', () => {
    it('should return 31 as example given', async () => {
        const totalSimilarityScore = await solveDay2(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-1-example.txt`
        )

        expect(totalSimilarityScore).toEqual(31)
    })
})
