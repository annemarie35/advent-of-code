import * as fs from 'node:fs'

export const readFile = async (filePath: string) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8')
        return data
    } catch (err) {
        console.error(err)
    }
}
