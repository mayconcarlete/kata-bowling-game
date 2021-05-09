import { Frame } from "./models/frame";

export class Game {
    frame:any[] = []
    constructor(){
        for(let i=0; i< 10; i++ ){
            this.frame[i] = new Frame()
        }
        // this.frame[9] = new BonusFrame()
    }
    roll(knocked_pins: number):void {
        const index = this.getFramePosition()
        this.frame[index].roll(knocked_pins)
        this.score()
    }
    score():number{
        const score = this.frame.reduce((score, currentFrame, index) => { 
            let bonus = 0
            if(index < 8){
                bonus = this.scoreLessThanEight(index)
            }
            else if(index === 8){
               bonus = this.scoreFrameEight(index)
            }
            else if(index === 9){
               bonus = this.scoreBonusFrame(index)
            }
            return score + currentFrame.score() + bonus
        }, 0)
        return score
    }
    getFramePosition(){
        for(let index = 0; index < 10; index ++){
            if(this.isLastFrame(index)){
                if(this.isStrike(index)){
                    if(this.isSecondPlayEmpty(index) || this.isThirdPlayEmpty(index)) return 9
                }
            }
            if(!this.isStrike(index)){
                if(this.isFirstPlayEmpty(index)) return index
                if(!this.isFirstPlayEmpty(index) && this.isSecondPlayEmpty(index)) return index
            }
        }
    return 0
    }
    isLastFrame(index:number):boolean{
        return index === 9 ? true : false
    }
    isStrike(index:number): boolean{
        return this.frame[index].isStrike()
    }
    isFirstPlayEmpty(index: number):boolean{
        return this.frame[index].getFirstPlay === undefined
    }
    isSecondPlayEmpty(index:number):boolean{
        return this.frame[index].getSecondPlay === undefined
    }
    isThirdPlayEmpty(index: number):boolean{
        return this.frame[index].getThirdPlay === undefined
    }
    scoreLessThanEight(index:number):number{
        let bonus = 0
        if(this.isStrike(index)){
            if(this.isStrike(index +1) && this.isStrike(index+2)){
                bonus += 20
            }
            else if(!this.isStrike(index+1)){
                bonus += this.frame[index+1].score()
            }
        }
        else if(this.isSpare(index)){
            bonus += (this.frame[index +1].getFirstPlay || 0)
        }
        return bonus
    }
    isSpare(index:number):boolean{
        return this.frame[index].isSpare()
    }
    scoreFrameEight(index:number):number{
        let bonus = 0
        if(this.isStrike(index)){
            bonus += (this.frame[index + 1].getFirstPlay || 0) + (this.frame[index + 1].getSecondPlay || 0)
        } 
        else if(this.isSpare(index)){
            bonus += (this.frame[index +1].getFirstPlay || 0)
        }
        return bonus
    }
    scoreBonusFrame(index:number):number{
        let bonus = 0
        if(this.isStrike(index)){
            bonus += (this.frame[index].getThirdPlay || 0)
        }
        else if(this.isSpare(index)){
            bonus += (this.frame[index].getSecondPlay || 0)
        }
        return bonus
    }
}