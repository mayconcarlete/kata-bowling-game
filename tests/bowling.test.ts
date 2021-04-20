import { Bowling } from "../src/bowling"

describe('Bowling class', () => {
    test('Should pass pins to frame with correct params', () => {
        const pins:number[] = [1,2]
        const sut: Bowling = new Bowling(pins)
        expect(sut.frame).toEqual(pins)
    })
})