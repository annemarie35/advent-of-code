import { findSimilarityScore, readFile, transformArray, transformDataForDay1 } from './data-source/data-source'

export const solveDay1 = async (filePath: string): Promise<number> => {
    const data = await readFile(filePath)
    const [leftList, rightList] = transformDataForDay1(data)

    let positionsArray: number[][]
    let positionsArrayTransformed: number[][]

    positionsArray = [leftList, rightList]

    positionsArrayTransformed = transformArray(positionsArray)

    return computeTotalDistance(positionsArrayTransformed)
}

export const solveDay1SecondPart = async (filePath: string): Promise<number> => {
    const data = await readFile(filePath)
    const [leftList, rightList] = transformDataForDay1(data)

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
