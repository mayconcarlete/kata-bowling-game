export class Frame {
    private firstPlay: undefined | number
    private secondPlay: undefined | number
    
    get getFirstPlay():undefined | number {
        return this.firstPlay
    }

    get getSecondPlay():undefined | number {
        return this.secondPlay
    }

    roll(knocked_pins:number):void{
        this.firstPlay == undefined ? this.firstPlay = knocked_pins: this.secondPlay = knocked_pins
    }

    score():number{
        return 0
    }
}