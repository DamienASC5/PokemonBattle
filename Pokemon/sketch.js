let Gengar= new Pokemon(42,150,370,"images/Gengar/frame_","_delay-0.03s.gif");
let PixelG;
let PixelS;
let PixelC;
let PixelZ;
let Suicune = new Pokemon(58, 400,370,"images/Suicune/frame_","_delay-0.04s.gif");
let Charizard = new Pokemon(47,350,100,"images/Charizard/frame_","_delay-0.04s.gif");
let Zapdos = new Pokemon(27,440,120,"images/Zapdos/frame_","_delay-0.06s.gif");
let backgroun;
let sprites;
let p1health = 1325;
let p2health = 1300;
let p3health = 1300;
let p4health = 2000;
let mySound;
let trainer;
let victory = "You Won";
let lose = "You Lose, Scrub";

let gameMode = 0;

function preload() {

	 	fireBlastSound = loadSound("fireBlastAudio.mp3");
  	 tackleSound = loadSound("tackleAudio.mp3");
}




function setup(){
    createCanvas(1000,800)
    textFont("Share Tech Mono", 40);
    backgroun = loadImage("images/back.jpg");
    // Gengar = loadImage("images/Gengar")
    // Suicune = loadImage("images/Suicune")
    // Zapdos = loadImage("images/Zapdos")
    Sprite = loadImage("images/Sprites.png");
    trainer = loadImage("images/trainer.png");
    PixelC = loadImage("images/PixelC.png")
    PixelS = loadImage("images/PixellS.png")
    PixelZ = loadImage("images/PixelZ.png")
    PixelG = loadImage("images/PixelG.png")
    Charizard.loadFrames();
    Suicune.loadFrames();
    Gengar.loadFrames();
    Zapdos.loadFrames();

}

  function draw(){
    if(gameMode == 0){
        image(backgroun,50,100);

        Charizard.show();
        Suicune.show();
        Gengar.show();
        Zapdos.show();
        image(Sprite,790,100);
        image(trainer,50,455);
        image(PixelC,940,110)
        image(PixelZ, 880,110)

        stroke(0);
        fill(255);
        text("HP: " + p1health, 120, 350);
        text("HP: " + p2health, 200, 150);
        text("HP: " + p3health, 420, 360);
        text("HP: " + p4health, 510,150);
        // Charizard Moves
    //   Fire Blast
//         fill("red")
//         rect(500,450,255,50);
//         fill(0)
//         text("Fire Blast", 515,490)

//     // Draco Meteor
//         fill("blue")
//         rect(500,510,255,50);
//         fill(0)
//         text("Draco Meteor", 500,550)
//         // Skuntank Moves
//     // Headbutt
//         fill("gray");
//         rect(270,110,225,50)
//         fill("black");   
//         text("Headbutt", 295,148);

//     // Poison Jab
//         fill("purple");
//         rect(270,170,225,50)
//         fill("black");   
//         text("Posion Jab", 278,210);
//     }  
//     else if (gameMode == 1 ){
//         background("cyan");
//         fill("black");
//         text("You Won!!",500,500);    }

// else if (gameMode == 2){
//     background("black");
//     fill("red");
//     text("You Lose, Scrub")
// }
// // Fire Blast
// function mouseClicked(){
//     if( mouseX>500 && mouseX<700 && mouseY>450 && mouseY<800){
//         p2health -=Math.floor (Math.random() *137);
//         fireBlastSound.play()
//         if(p2health <= 0)
//         {
//             gameMode = 1;          
            
//             }
// // Headbutt
//     }
//     else if(mouseX>270 && mouseX<495 && mouseY>110 && mouseY<460){
//         p1health -=Math.floor(Math.random() *13);  
//         tackleSound.play();
//     }  
//         gameMode =2;
// }

    }
  }
