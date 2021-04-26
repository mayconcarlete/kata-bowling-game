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
    test('Should start roundControl with 0 value', () => {
        const sut = new Game()
        expect(sut.roundControl).toBe(0)
    })
    test('Should increment roundControl when roll is called', () =>{
        const sut = new Game()
        sut.roll(1)
        expect(sut.roundControl).toBe(1)
    })
    test('Should reset roundControl to 0 value when roll is called two times', () => {
        const sut = new Game()
        sut.roll(1)
        sut.roll(4)
        expect(sut.roundControl).toBe(0)
    })
    test('Should Game increment frameControl when roll is called twice', () => {
        const sut = new Game()
        sut.roll(1)
        sut.roll(5)
        expect(sut.frameControl).toBe(1)
    })
    test('Should Game call score when roll finish', () => {
        const sut = new Game()
        const scoreSpy = jest.spyOn(sut, 'score')
        sut.roll(2)
        expect(scoreSpy).toHaveBeenCalledTimes(1)
    })
    test('Should Game score calculate score of first frame when roll is called twice', () => {
        const sut = new Game()
        sut.roll(1)
        sut.roll(2)
        const score = sut.score()
        expect(score).toBe(3)
    })
    test('Should Game score calculate score of all frames', () => {
        const sut = new Game()
        sut.roll(1)
        sut.roll(1)
        sut.roll(1)
        const score = sut.score()
        expect(score).toBe(3)
    })
    test('Should Game update frameControl and roundControl when a strike', () => {
        const sut = new Game()
        sut.roll(10)
        expect(sut.roundControl).toBe(0)
        expect(sut.frameControl).toBe(1)
    })
    test('Should Game update frameControl and roundControl when a spare', () =>{
        const sut = new Game()
        sut.roll(5)
        sut.roll(5)
        expect(sut.roundControl).toBe(0)
        expect(sut.frameControl).toBe(1)
    })
    test('Should calculate bonus when strike', () =>{
        const sut = new Game()
        sut.roll(10)
        sut.roll(1)
        sut.roll(5)
        expect(sut.score()).toBe(22)
    })
    test('Should calculate bonus when spare', () => {
        const sut = new Game()
        sut.roll(3)
        sut.roll(7)
        sut.roll(1)
        const score = sut.score()
        expect(score).toBe(12)
    })

})  