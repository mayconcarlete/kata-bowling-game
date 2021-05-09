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
                if(currentFrame.isStrike()){
                    if(this.frame[index + 1].isStrike() && this.frame[index + 2].isStrike()){
                        bonus += 20
                    }
                    else if(!this.frame[index+1].isStrike()){
                        bonus += this.frame[index+1].score()
                    }
                }
                else if(currentFrame.isSpare()){
                    bonus += (this.frame[index +1].getFirstPlay || 0)
                }
           }
            else if(index === 8){
                if(currentFrame.isStrike()){
                    bonus += (this.frame[index + 1].getFirstPlay || 0) + (this.frame[index + 1].getSecondPlay || 0)
                } 
                else if(currentFrame.isSpare()){
                    bonus += (this.frame[index +1].getFirstPlay || 0)
                }
            }
            else if(index === 9){
                if(currentFrame.isStrike()){
                    bonus += (this.frame[index].getThirdPlay || 0)
                }
                else if(currentFrame.isSpare()){
                    bonus += (this.frame[index].getSecondPlay || 0)
                }
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
}