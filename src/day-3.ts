import { readFile } from './data-source/data-source'

function computeInstructions(validInstructions: IterableIterator<RegExpMatchArray>, total: number = 0) {
    for (const validInstruction of validInstructions) {
        total += Number(validInstruction[1]) * Number(validInstruction[2])
    }
    return total
}

export const solveDay3 = async (filePath: string) => {
    let total: number = 0
    const corruptedCode = await readFile(filePath)

    const validInstructions = corruptedCode.matchAll(/mul\((\d+),(\d+)\)/g)

    total = computeInstructions(validInstructions, total)

    return total
}

export const solveDay3SecondPart = async (filePath: string) => {
    let total: number = 0
    const corruptedCode = await readFile(filePath)

    const enabledInstructions = corruptedCode
        .split(/(?=do\(\)|don\'t\(\))/g)
        .filter((tit) => !tit.startsWith("don't()"))
    const validInstructions = enabledInstructions.toString().matchAll(/mul\((\d+),(\d+)\)/g)

    total = computeInstructions(validInstructions, total)

    return total
}
