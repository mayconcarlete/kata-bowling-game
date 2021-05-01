import { Frame } from "./frame";

export class BonusFrame extends Frame {

    private thirdPlay: undefined | number
    get getThirdPlay():undefined | number{
        return this.thirdPlay || 0
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
}