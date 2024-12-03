import {
    transformArray,
    sortAscendant,
    findSimilarityScore,
    isIncreasing,
    isGraduallyIncreasingOrDecreasing,
    isDecreasing,
    readFile,
    transformDataForDay1,
    isReportSafe,
    isSafeRegardlessWichLevelIsMoved,
    removeInvalidChars
} from '../../src/data-source/data-source'
import dotenv from 'dotenv'

dotenv.config()
describe('Data Source', () => {
    describe('Read file', () => {
        it('Should be able to read file and return an array', async () => {
            const response = await readFile(
                `${process.env.DIRNAME_PATH}advent-of-code-2024/test/data-source/text-day-1-test.txt`
            )
            expect(transformDataForDay1(response)).toEqual([
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

    describe('Find similarity score', () => {
        const locationIdsToCompute: number[][] = [
            [3, 9],
            [4, 4],
            [8, 0]
        ]

        locationIdsToCompute.forEach(([locationIdToFind, result]) => {
            it(`should calculate the similarity score for ${locationIdToFind} locationIdToFind`, async () => {
                const locationIdsToAnalyse = [4, 3, 5, 3, 9, 3]
                const response = findSimilarityScore({ locationIdsToAnalyse, locationIdToFind })
                expect(response).toEqual(result)
            })
        })
    })

    describe('isIncreasing', () => {
        const reports: (boolean | number[])[][] = [
            [[1, 2, 7, 8, 9], true],
            [[1, 3, 6, 7, 9], true],
            [[8, 6, 4, 4, 1], false],
            [[1, 3, 2, 4, 5], false]
        ]

        reports.forEach(([report, result]) => {
            it(`should verify if all values are increasing for report ${report}`, async () => {
                expect(isIncreasing(report as number[])).toBe(result)
            })
        })
    })

    describe('isDecreasing', () => {
        const reports: (boolean | number[])[][] = [
            [[7, 6, 4, 2, 1], true],
            [[1, 2, 7, 8, 9], false],
            [[9, 7, 6, 2, 1], true],
            [[1, 3, 2, 4, 5], false],
            [[8, 6, 4, 4, 1], false],
            [[1, 3, 6, 7, 9], false]
        ]

        reports.forEach(([report, result]) => {
            it(`should verify if all values are decreasing for report ${report}`, async () => {
                expect(isDecreasing(report as number[])).toBe(result)
            })
        })
    })

    describe('isGraduallyIncreasingOrDecreasing', () => {
        const reports: (boolean | number[])[][] = [
            [[7, 6, 4, 2, 1], true],
            [[1, 2, 7, 8, 9], false],
            [[9, 7, 6, 2, 1], false],
            [[1, 3, 2, 4, 5], true],
            [[8, 6, 4, 4, 1], false],
            [[1, 3, 6, 7, 9], true]
        ]

        reports.forEach(([report, result]) => {
            it(`should verify if all values are increasing or decreasing gradually by at least one and at most three for report ${report}`, async () => {
                expect(isGraduallyIncreasingOrDecreasing(report as number[])).toBe(result)
            })
        })
    })

    describe('isReportSafe', () => {
        const reports: (boolean | number[])[][] = [
            [[7, 6, 4, 2, 1], true],
            [[1, 2, 7, 8, 9], false],
            [[9, 7, 6, 2, 1], false],
            [[1, 3, 2, 4, 5], false],
            [[8, 6, 4, 4, 1], false],
            [[1, 3, 6, 7, 9], true]
        ]

        reports.forEach(([report, result]) => {
            it(`should verify if report ${report} is safe : ${result}`, async () => {
                expect(isReportSafe(report as number[])).toBe(result)
            })
        })
    })

    describe('isSafeRegardlessWichLevelIsMoved', () => {
        const reports: (boolean | number[])[][] = [
            [[7, 6, 4, 2, 1], true],
            [[1, 2, 7, 8, 9], false],
            [[9, 7, 6, 2, 1], false],
            [[1, 3, 2, 4, 5], true],
            [[8, 6, 4, 4, 1], true],
            [[1, 3, 6, 7, 9], true]
        ]

        reports.forEach(([report, result]) => {
            it(`should verify if report ${report} is safe : ${result}`, async () => {
                expect(isSafeRegardlessWichLevelIsMoved(report as number[])).toBe(result)
            })
        })
    })

    describe('removeInvalidChars', () => {
        const toBeCleaned: string[][] = [
            ['xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))', 'mul2,4mul5,5mul11,8mul8,5']
        ]
        toBeCleaned.forEach(([corruptedProgram, cleanedProgram]) => {
            it(`should verify if corruptedProgram ${corruptedProgram} is cleaned`, async () => {
                expect(removeInvalidChars(corruptedProgram)).toBe(cleanedProgram)
            })
        })
    })
})
