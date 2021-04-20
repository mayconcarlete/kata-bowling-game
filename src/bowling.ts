export class Bowling{
    frame:number[] = []
    constructor(frame:number[]){
        this.frame = frame
    }
    roll(knocked_pins: number){}
    score(): number{
        return 1
    }
}