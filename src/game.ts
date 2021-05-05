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
        score += this.calculateFrameLessThanEight()
        score += this.calculateFrameEight()
        score+= this.calculateBonusFrame()
        return score
    }

    calculateFrameLessThanEight():number{
        let score = 0
        for(let i = 0; i < 8; i ++){
            if(this.isStrike(i)){
                score += this.calculateLessThanEightStrikeBonus(i)
            }
            else if(this.isSpare(i)){
                score += this.calculateLessThanWithSpareBonus(i)
            }
            score += this.frame[i].score()
        }
        return score
    }
    
    isStrike(index:number):boolean{
        return this.frame[index].isStrike()
    }
    
    calculateLessThanEightStrikeBonus(index: number):number{
        if(this.isStrike(index+1)){
            return 10 + (this.frame[index+2].getFirstPlay || 0)
        }
        else{
            return this.frame[index+1].score()
        }
    }
    
    isSpare(index: number):boolean{
        return this.frame[index].isSpare()
    }
    
    calculateLessThanWithSpareBonus(index:number):number{
        return (this.frame[index+1].getFirstPlay || 0)
    }
    
    calculateFrameEight():number{
        let score = 0
        if(this.isStrike(8)){
            score += this.frame[8].score() + this.frame[9].score()
        }
        else if(this.isSpare(8)){
            score += this.frame[8].score() + (this.frame[9].getFirstPlay || 0)
        }
        else{
            score += this.frame[8].score()
        }
        return score
    }
    
    calculateBonusFrame():number{
        let score = 0
        if(this.isStrike(9) || this.isSpare(9)){
            score += this.frame[9].getThirdPlay
        }
        score+= this.frame[9].score()
        return score
    }
}