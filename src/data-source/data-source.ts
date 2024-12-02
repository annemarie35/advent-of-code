import * as fs from 'node:fs'

export const readFile = async (filePath: string): Promise<number[][]> => {
    let leftList: number[] = []
    let rightList: number[] = []

    try {
        const data = fs.readFileSync(filePath, 'utf8')
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

function compareNumbers(a: number, b: number) {
    return a - b
}
