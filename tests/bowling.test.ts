import { Bowling } from "../src/bowling"
import { Frame } from "../src/models/frame"
type SutTypes = {
    sut:Bowling
}
const frame: Frame[] = [new Frame(1,2), new Frame(3,4)]

const makeSut = ():SutTypes => {
    const sut: Bowling = new Bowling(frame)
    return {sut}
}

describe('Bowling class', () => {
    test('Should each frame has two rolls', () => {
        const {sut} = makeSut()
        expect(sut.getFrame).toEqual([new Frame(1,2), new Frame(3,4)])
    })
    test('Should frameControl is the length of frame', () => {
        const {sut} = makeSut()
        expect(sut.getFrameControl).toBe(frame.length)
    })
})