import * as fs from 'node:fs'

export const readFile = async (filePath: string): Promise<number[][]> => {
    let leftList: number[] = []
    let rightList: number[] = []

    try {
        const data = await fs.readFileSync(filePath, 'utf8')
        data.split(/\r?\n/).forEach((line) => {
            const lineArray = line.replace('   ', ' ').split(' ')
            leftList.push(Number(lineArray[0]))
            rightList.push(Number(lineArray[1]))
        })
        return [sortAscendant(leftList), sortAscendant(rightList)]
    } catch (err) {
        console.error(err)
    }
}

export const sortAscendant = (arrayToSort: number[]): number[] => {
    return arrayToSort.sort(compareNumbers)
}

export const transformArray = (arrayToCompute: number[][]): number[][] => {
    let newArray: number[][] = []
    for (let i: number = 0; i < arrayToCompute[0].length; i++) {
        newArray.push([arrayToCompute[0][i], arrayToCompute[1][i]])
    }
    return newArray
}

export const findSimilarityScore = ({
    locationIdsToAnalyse,
    locationIdToFind
}: {
    locationIdsToAnalyse: number[]
    locationIdToFind: number
}): number => {
    const locationIdsDuplicates = locationIdsToAnalyse.filter((locationId: number) => {
        return locationId === locationIdToFind
    })
    return locationIdsDuplicates.length * locationIdToFind
}

function compareNumbers(a: number, b: number) {
    return a - b
}
