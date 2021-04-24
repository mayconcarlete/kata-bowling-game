export class Frame {
    private firstPlay: undefined | number
    private secondPlay: undefined | number
    
    get getFirstPlay():undefined | number {
        return this.firstPlay
    }

    get getSecondPlay():undefined | number {
        return this.secondPlay
    }

    score():number{
        return 0
    }
}