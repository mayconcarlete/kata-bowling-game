import { Frame } from "../src/models/frame"

describe('Frame class', () => {
    test('Should firstPlay and SecondPlay undefined when Frame are created', () => {
        const sut = new Frame()
        expect(sut.getFirstPlay).toBeFalsy()
        expect(sut.getSecondPlay).toBeFalsy()
    })
    test('Should set firstPlay when roll are called for the first time', () => {
        const sut = new Frame()
        sut.roll(5)
        expect(sut.getFirstPlay).toBe(5)
        expect(sut.getSecondPlay).toBeFalsy()
    })
    test('Should return 0 when frame doenst has filled with plays', () => {
        const sut = new Frame()
        const result = sut.score()
        expect(result).toBe(0)
    })
})