import { Game } from "../src/game"
import { BonusFrame } from "../src/models/bonus-frame"
import { Frame } from "../src/models/frame"

describe('Game class', () => {
    test('Should create array with 9 Frames and 1 BonusFrame', () => {
        const sut = new Game()
        expect(sut.frame[0]).toBeInstanceOf(Frame)
        expect(sut.frame[8]).toBeInstanceOf(Frame)
        expect(sut.frame[9]).toBeInstanceOf(BonusFrame)
    })
    test('Should call roll with correct params', () => {
        const sut = new Game()
        const rollSpy =jest.spyOn(sut, 'roll')
        sut.roll(2)
        expect(rollSpy).toHaveBeenCalledWith(2)
    })
    test('Should set firstPlay of frame when game call roll', () => {
        const sut = new Game()
        sut.roll(3)
        expect(sut.frame[0].getFirstPlay).toBe(3)
        expect(sut.frame[0].getSecondPlay).toBeFalsy()
    })
})