import { readFile } from '../../src/data-source/data-source'
import dotenv from 'dotenv'

dotenv.config()

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
})
