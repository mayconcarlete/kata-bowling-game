import { BonusFrame } from "../src/models/bonus-frame"

describe('Bonus Frame class', () => {
    test('Should firstPlay, secondPlay and thirdPlay undefined when Bonus Frame are created', () =>{
        const sut = new BonusFrame()
        expect(sut.getFirstPlay).toBeFalsy()
        expect(sut.getSecondPlay).toBeFalsy()
        expect(sut.getThirdPlay).toBeFalsy()
    })
    test('Should set firstPlay when roll is called for the first time', () => {
        const sut = new BonusFrame()
        sut.roll(4)
        expect(sut.getFirstPlay).toBe(4)
        expect(sut.getSecondPlay).toBeFalsy()
        expect(sut.getThirdPlay).toBeFalsy()
    })
    test('Should set secondPlay when roll is called twice', () => {
        const sut = new BonusFrame()
        sut.roll(1)
        sut.roll(5)
        expect(sut.getFirstPlay).toBe(1)
        expect(sut.getSecondPlay).toBe(5)
        expect(sut.getThirdPlay).toBeFalsy()
    })
    test('Should set thirdPlay when roll is called three times', () => {
        const sut = new BonusFrame()
        sut.roll(0)
        sut.roll(2)
        sut.roll(3)
        expect(sut.getFirstPlay).toBe(0)
        expect(sut.getSecondPlay).toBe(2)
        expect(sut.getThirdPlay).toBe(3)
    })
})