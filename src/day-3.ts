import { readFile } from './data-source/data-source'

function computeInstructions(validInstructions: IterableIterator<RegExpMatchArray>) {
    let total: number = 0
    for (const validInstruction of validInstructions) {
        total += Number(validInstruction[1]) * Number(validInstruction[2])
    }
    return total
}

export const solveDay3 = async (filePath: string) => {
    const corruptedCode = await readFile(filePath)

    const validInstructions = corruptedCode.matchAll(/mul\((\d+),(\d+)\)/g)

    return computeInstructions(validInstructions)
}

export const solveDay3SecondPart = async (filePath: string) => {
    const corruptedCode = await readFile(filePath)

    const enabledInstructions = corruptedCode
        .split(/(?=do\(\)|don\'t\(\))/g)
        .filter((instructions) => !instructions.startsWith("don't()"))
    const validInstructions = enabledInstructions.toString().matchAll(/mul\((\d+),(\d+)\)/g)

    return computeInstructions(validInstructions)
}
