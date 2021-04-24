import { Frame } from "../src/models/frame"

describe('Frame class', () => {
    test('Should return 0 when frame doenst has filled with plays', () => {
        const sut = new Frame()
        const result = sut.score()
        expect(result).toBe(0)
    })
})