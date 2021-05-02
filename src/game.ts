import { BonusFrame } from "./models/bonus-frame";
import { Frame } from "./models/frame";

export class Game {
    frameControl:number = 0 
    roundControl:number = 0
    frame:any = []
    constructor(){
        for(let i=0; i<9; i++ ){
            this.frame[i] = new Frame()
        }
        this.frame[9] = new BonusFrame()
    }

    roll(knocked_pins:number ):void {
        if(this.frameControl < 9){
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
    else{
        this.frame[9].roll(knocked_pins)
        this.score()
    }
    }

    score():number{
        let score = 0
        score = this.calculateFrameLessThanEight()
        if(this.frame[8].isStrike()){
            score += this.frame[8].score() + this.frame[9].score()
        }
        else if(this.frame[8].isSpare()){
            score += this.frame[8].score() + (this.frame[9].getFirstPlay || 0)
        }
        else{
            score += this.frame[8].score()
        }
        if(this.frame[9].isStrike() || this.frame[9].isSpare()){
            score += this.frame[9].getThirdPlay
        }
        score+= this.frame[9].score()
        return score
    }
    calculateFrameLessThanEight():number{
        let score = 0
        for(let i = 0; i < 8; i ++){
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
        return score
    }
}