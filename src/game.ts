import { BonusFrame } from "./models/bonus-frame";
import { Frame } from "./models/frame";

export class Game {
    private frameControl:number = 0 
    frame: Frame[]|BonusFrame[] = []
    constructor(){
        for(let i=0; i<9; i++ ){
            this.frame[i] = new Frame()
        }
        this.frame[9] = new BonusFrame()
    }
    roll(knocked_pins:number ):void {
        this.frame[this.frameControl].roll(knocked_pins)
        this.score()
    }
    score(){
        console.log('Score')
    }
}