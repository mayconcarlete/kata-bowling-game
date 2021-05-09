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
    test('Should Game increment frameControl when roll is called twice', () => {
        const sut = new Game()
        sut.roll(1)
        sut.roll(5)
        const framePosition = sut.getFramePosition()
        expect(framePosition).toBe(1)
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
    test('Should calculate bonus when strike', () =>{
        const sut = new Game()
        sut.roll(10)
        sut.roll(1)
        sut.roll(5)
        expect(sut.score()).toBe(22)
    })
    test('Should calculate bonus when spare', () => {
        const sut = new Game()
        sut.roll(0)
        sut.roll(7)
        sut.roll(1)    
        sut.roll(9)
        sut.roll(5)
        const score = sut.score()
        expect(score).toBe(27)
    })
    test('Should calculate bonus when Frame spare', () => {
        const sut = new Game()
        sut.roll(5)
        sut.roll(5)
        sut.roll(5)
        const score = sut.score()        
        expect(score).toBe(20)
    })
     test('Should calculate bonus when Frame spare', () => {
        const sut = new Game()
        // for(let i =0; i< 8; i++) sut.roll(10)
        sut.roll(10)
        sut.roll(10)
        sut.roll(10)
        sut.roll(10)
        const score = sut.score()  
        console.log(sut.frame)      
        expect(score).toBe(236)
    })
    // test('Should calculate bonus when frame 9 is strike', () => {
    //     const sut = new Game()
    //     for(let i =0; i< 16;i++) sut.roll(1)
    //     sut.roll(10)
    //     sut.roll(3)
    //     sut.roll(4)
    //     const score = sut.score()
    //     expect(score).toBe(40)
    // })
    // test('Should calculate bonus when frame 9 spare', () => {
    //     const sut = new Game()
    //     for(let i =0; i< 16;i++) sut.roll(1)
    //     sut.roll(5)
    //     sut.roll(5)
    //     sut.roll(4)
    //     const score = sut.score()
    //     expect(score).toBe(34)
    // })
    // test('Should calculate bonus when Bonus Frame strike', () => {
    //     const sut = new Game()
    //     for(let i =0; i< 22; i++) {
    //         sut.roll(10)
    //     }
    //     const score = sut.score()
    //     console.log(sut.frame)
    //     expect(score).toBe(300)
    // })
  
   
})  