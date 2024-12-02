import * as fs from 'node:fs'

export const readFile = async (filePath: string) => {
    let leftList: number[] = []
    let rightList: number[] = []

    try {
        const data = fs.readFileSync(filePath, 'utf8')
        data.split(/\r?\n/).forEach((line) => {
            const lineArray = line.replace('   ', ' ').split(' ')
            leftList.push(Number(lineArray[0]))
            rightList.push(Number(lineArray[1]))
        })
        return [leftList, rightList]
    } catch (err) {
        console.error(err)
    }
}
