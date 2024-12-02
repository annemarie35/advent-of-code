import { solveDay1 } from '../src/day-1'
import dotenv from 'dotenv'

dotenv.config()

describe('Solve day 1', () => {
    it('should return 11 as example given', async () => {
        const totalDistance = await solveDay1(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-1-example.txt`
        )

        expect(totalDistance).toEqual(11)
    })
})
