import { BonusFrame } from "../src/models/bonus-frame"

describe('Bonus Frame class', () => {
    test('Should firstPlay, secondPlay and thirdPlay undefined when Bonus Frame are created', () =>{
        const sut = new BonusFrame()
        expect(sut.getFirstPlay).toBeFalsy()
        expect(sut.getSecondPlay).toBeFalsy()
        expect(sut.getThirdPlay).toBeFalsy()
    })
})