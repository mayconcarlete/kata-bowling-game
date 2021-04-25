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
    test('Should set secondPlay when roll are called for the second time', () => {
        const sut = new Frame()
        sut.roll(0)
        sut.roll(9)
        expect(sut.getFirstPlay).toBe(0)
        expect(sut.getSecondPlay).toBe(9)
    })
    test('Should return 0 when frame doenst has filled with plays', () => {
        const sut = new Frame()
        const result = sut.score()
        expect(result).toBe(0)
    })
    test('Should return the sum of firstPlay and secondPlay', () => {
        const sut = new Frame()
        sut.roll(1)
        expect(sut.score()).toBe(1)
        sut.roll(2)
        expect(sut.score()).toBe(3)
    })
})