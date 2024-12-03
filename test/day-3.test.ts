import dotenv from 'dotenv'
import { solveDay3 } from '../src/day-3'

dotenv.config()

describe('Compute results with valid instructions program', () => {
    it('should return 161 as example given', async () => {
        const result = await solveDay3(
            `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-3-test.txt`
        )

        expect(result).toEqual(161)
    })
})
