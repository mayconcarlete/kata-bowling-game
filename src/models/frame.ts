export class Frame {

    private firstPlay: undefined | number
    private secondPlay: undefined | number
    
    get getFirstPlay():undefined | number {
        return this.firstPlay
    }

    get getSecondPlay():undefined | number {
        return this.secondPlay
    }

    set setFirstPlay(knocked_pins:number){
        this.firstPlay = knocked_pins
    }

    set setSecondPlay(knocked_pins:number){
        this.secondPlay = knocked_pins
    }

    
    roll(knocked_pins:number):void{
        this.firstPlay == undefined ? this.firstPlay = knocked_pins: this.secondPlay = knocked_pins
    }
    
    score(frame:Frame[], index: number):number{
        let bonus = 0
        if(this.isStrike() && frame[index +1].isStrike()){
            bonus = (frame[index +1].getFirstPlay || 0) + (frame[index+2].getSecondPlay || 0)
        }
        else if(this.isStrike() && !frame[index +1].isStrike()){
            bonus = (frame[index +1].getFirstPlay || 0) + (frame[index+1].getSecondPlay || 0)
        }
        return (this.firstPlay || 0) + (this.secondPlay || 0 ) + bonus
    }
    
    isStrike():boolean{
        return this.firstPlay == 10 ? true : false
    }
    
    // isSpare():boolean{
    //     return this.score() == 10 && this.isStrike() === false ? true : false
    // }
}