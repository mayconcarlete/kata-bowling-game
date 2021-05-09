
export class Frame {
    
    private firstPlay: undefined | number
    private secondPlay: undefined | number
    private thirdPlay: undefined | number

    get getFirstPlay():undefined | number {
        return this.firstPlay
    }

    get getSecondPlay():undefined | number {
        return this.secondPlay
    }

    get getThirdPlay():undefined | number{
        return this.thirdPlay
    }

    set setFirstPlay(knocked_pins:number){
        this.firstPlay = knocked_pins
    }

    set setSecondPlay(knocked_pins:number){
        this.secondPlay = knocked_pins
    }

    set setThirdPlay(knocked_pins:number){
        this.secondPlay = knocked_pins
    }
    
    roll(knocked_pins:number):void{
        if(this.getFirstPlay === undefined){
            this.setFirstPlay = knocked_pins
        }
        else if(this.getSecondPlay === undefined){
            this.setSecondPlay = knocked_pins
        }
        else {
            this.thirdPlay = knocked_pins
        }
    }
    score():number{
        return (this.firstPlay || 0) + (this.secondPlay || 0 )
    }
    isStrike():boolean{
        return this.getFirstPlay === 10 ? true : false
    }
    isSpare():boolean{
        return (this.getFirstPlay || 0) + (this.getSecondPlay || 0) === 10 ? true : false
    }
}