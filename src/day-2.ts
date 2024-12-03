import { isReportSafe, isSafeRegardlessWichLevelIsMoved, readFile } from './data-source/data-source'

const getReportsFromFile = (data: string): number[][] => {
    let array: number[][] = []
    data.split(/\r?\n/).forEach((line) => {
        const lineArray = line
            .replace('   ', ' ')
            .split(' ')
            .map((item) => Number(item.trim()))
        array.push(lineArray)
    })
    return array
}

const countSafeReports = (array: number[][]) => {
    return array.reduce((accumulator, currentValue) => accumulator + (isReportSafe(currentValue) ? 1 : 0), 0)
}

export const solveDay2 = async (filePath: string): Promise<number> => {
    const data = await readFile(filePath)
    let array = getReportsFromFile(data)

    return countSafeReports(array)
}

export const solveDay2SecondPart = async (filePath: string) => {
    const data = await readFile(filePath)
    let reports = getReportsFromFile(data)

    const unsafeReports = reports.filter((report) => !isReportSafe(report))
    const safeReports = reports.filter((report) => isReportSafe(report))

    const unsafeReportTolerated = unsafeReports.filter((report) => isSafeRegardlessWichLevelIsMoved(report))
    return unsafeReportTolerated.length + safeReports.length
}
