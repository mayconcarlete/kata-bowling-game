import { Frame } from "../src/models/frame"

describe('Frame class', () => {
    test('Should firstPlay and SecondPlay undefined when Frame are created', () => {
        const sut = new Frame()
        expect(sut.getFirstPlay).toBeFalsy()
        expect(sut.getSecondPlay).toBeFalsy()
    })
    test('Should return 0 when frame doenst has filled with plays', () => {
        const sut = new Frame()
        const result = sut.score()
        expect(result).toBe(0)
    })
})