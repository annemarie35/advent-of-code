import { readFile, removeInvalidChars } from './data-source/data-source'

export const solveDay3 = async (filePath: string) => {
    const data = await readFile(filePath)
    const cleanedData = removeInvalidChars(data)
    let total: number = 0
    cleanedData.split('mul').forEach((line) => {
        line.split(',')
            .map((item) => Number(item))
            .reduce((accumulator, currentValue) => {
                total += accumulator * currentValue
                return total
            })
    })
    return total
}
