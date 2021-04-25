import { Game } from "../src/game"

describe('Game class', () => {
    test('Should call roll with correct params', () => {
        const sut = new Game()
        const rollSpy =jest.spyOn(sut, 'roll')
        sut.roll(2)
        expect(rollSpy).toHaveBeenCalledWith(2)
    })
})