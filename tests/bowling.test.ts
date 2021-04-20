import { Bowling } from "../src/bowling"
import { Frame } from "../src/models/frame"

describe('Bowling class', () => {
    test('Should each frame has two rolls', () => {
        const frame: Frame[] = [new Frame(1,2), new Frame(3,4)]
        const sut: Bowling = new Bowling(frame)
        expect(sut.frame).toEqual(frame)
    })
})