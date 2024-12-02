import { findSimilarityScore, readFile, sortAscendant, transformArray } from './data-source/data-source'

export const solveDay1 = async (filePath: string): Promise<number> => {
    const file = await readFile(filePath)
    let positionsArray: number[][]
    let positionsArrayTransformed: number[][]

    positionsArray = [sortAscendant(file[0]), sortAscendant(file[1])]
    positionsArrayTransformed = transformArray(positionsArray)

    return computeTotalDistance(positionsArrayTransformed)
}

export const solveDay2 = async (filePath: string): Promise<number> => {
    const [leftList, rightList] = await readFile(filePath)

    return computeTotalSimilarityScore({ leftList, rightList })
}

const computeTotalSimilarityScore = ({ leftList, rightList }: { leftList: number[]; rightList: number[] }): number => {
    let similaryScore: number = 0
    let locationIdSimilarityScore: number

    leftList.forEach((locationIdToFind: number) => {
        locationIdSimilarityScore = findSimilarityScore({ locationIdsToAnalyse: rightList, locationIdToFind })
        similaryScore += locationIdSimilarityScore
    })
    return similaryScore
}

const computeTotalDistance = (positionsArraySorted: number[][]): number => {
    return positionsArraySorted.reduce((accumulator, currentValue) => {
        return accumulator + Math.abs(currentValue[0] - currentValue[1])
    }, 0)
}
