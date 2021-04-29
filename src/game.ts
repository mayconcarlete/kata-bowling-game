import { BonusFrame } from "./models/bonus-frame";
import { Frame } from "./models/frame";

export class Game {
    frameControl:number = 0 
    roundControl:number = 0
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
        if(knocked_pins == 10){
            this.frameControl += 1
            this.roundControl = 0
        }
        else if(this.roundControl === 1){
            this.roundControl = 0
            this.frameControl += 1
        }
        else{
            this.roundControl += 1
        }
        
    }

    score():number{
        let score = 0
        for(let i = 0; i <= 9; i ++){
            if(this.frame[i].isStrike() === true){
                if(this.frame[i+1].isStrike() === true && this.frame[i+1].isStrike() === true){
                    score += 10 + (this.frame[i+2].getFirstPlay || 0)
                }
                else{
                    score += this.frame[i+1].score()
                }
            }
            if(this.frame[i].isSpare() === true){
                score += (this.frame[i+1].getFirstPlay || 0)
            }
            score += this.frame[i].score()
        }
        //score+= this.frame[9].score()
        return score
    }
}