class Pokemon{
    loadFrames(){
        for (let i = 0; i < this.maxFrame; i++) {
            this.frames[i] = loadImage(this.strStart +i+ this.strEnd);
         }
    }
    constructor(maxFrame,x,y,strStart,strEnd){
        this.frames = [],
        this.currentFrame =  0,
        this.maxFrame = maxFrame,
        this.x = x,
        this.y = y,
        this.strEnd = strEnd,
        this.strStart = strStart
    }
    
    show(){
        image(this.frames[this.currentFrame],this.x,this.y);
        this.currentFrame++;
        if (this.currentFrame == this.maxFrame){
            this.currentFrame = 0;
        }
    }
}