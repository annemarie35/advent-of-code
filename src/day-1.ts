import { readFile, sortAscendant, transformArray } from './data-source/data-source'

export const solveDay1 = async (filePath: string): Promise<number> => {
    const file = await readFile(filePath)
    let positionsArray: number[][]
    let positionsArrayTransformed: number[][]

    if (file) {
        positionsArray = [sortAscendant(file[0]), sortAscendant(file[1])]
        positionsArrayTransformed = transformArray(positionsArray)
    }

    return computeTotalDistance(positionsArrayTransformed)
}

const computeTotalDistance = (positionsArraySorted: number[][]): number => {
    return positionsArraySorted.reduce((accumulator, currentValue) => {
        return accumulator + Math.abs(currentValue[0] - currentValue[1])
    }, 0)
}
