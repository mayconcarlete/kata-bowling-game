import { Frame } from "./frame";

export class BonusFrame extends Frame {
    private thirdPlay: undefined | number
    get getThirdPlay():undefined | number{
        return this.thirdPlay
    }
}