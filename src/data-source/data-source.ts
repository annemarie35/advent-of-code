import * as fs from 'node:fs'

export const readFile = async (filePath: string): Promise<string> => {
    try {
        const data = await fs.readFileSync(filePath, 'utf8')
        return data
    } catch (err) {
        console.error(err)
    }
}

export const transformDataForDay1 = (data: string) => {
    let leftList: number[] = []
    let rightList: number[] = []

    data.split(/\r?\n/).forEach((line) => {
        const lineArray = line.replace('   ', ' ').split(' ')
        leftList.push(Number(lineArray[0]))
        rightList.push(Number(lineArray[1]))
    })
    return [sortAscendant(leftList), sortAscendant(rightList)]
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

    // With map and slice instead of old school loop style
    // return arrayToCompute[0].map((_, index) => arrayToCompute.slice(1).map((array) => array[index]))
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

export const isIncreasing = (report: number[]): boolean => {
    for (let i = 1; i < report.length; i++) {
        if (report[i] <= report[i - 1]) {
            return false
        }
    }

    return true
}

export const isDecreasing = (report: number[]): boolean => {
    for (let i = 1; i < report.length; i++) {
        if (report[i] >= report[i - 1]) {
            return false
        }
    }

    return true
}

export const isGraduallyIncreasingOrDecreasing = (report: number[]): boolean => {
    for (let i = 1; i < report.length; i++) {
        const isGraduallyIncreasingOrDecreasing =
            Math.abs(report[i] - report[i - 1]) <= 3 && Math.abs(report[i] - report[i - 1]) >= 1
        if (!isGraduallyIncreasingOrDecreasing) {
            return false
        }
    }
    return true
}
