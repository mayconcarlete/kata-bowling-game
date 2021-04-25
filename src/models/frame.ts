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

    score():number{
        return (this.firstPlay || 0) + (this.secondPlay || 0 )
    }
}