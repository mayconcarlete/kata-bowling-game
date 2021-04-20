import { Frame } from "./models/frame"

export class Bowling{
    frameControl:number = 0
    
    constructor( 
        private frame: Frame[]
        ){
            this.frameControl = this.frame.length
        }
    public get getFrame():Frame[]{
        return this.frame
    }
    public get getFrameControl():number{
        return this.frame.length
    }
    roll(knocked_pins: number):void{

    }
    score(): number{
        return 1
    }
}