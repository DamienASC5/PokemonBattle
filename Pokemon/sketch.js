let pokemon1;
let pokemon2;
let backgroun;
let sprites;
let p1health = 1325;
let p2health = 1300;
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
    pokemon1 = loadImage("images/Charizard.png"); 
    pokemon2 = loadImage("images/Stuntank.png");
    Sprite = loadImage("images/Sprites.png");
    trainer = loadImage("images/trainer.png");    
}

  function draw(){
    if(gameMode == 0){
        rect(1,1,789,)
        image(backgroun,50,100);
        image(pokemon1,55,190);
        image(pokemon2,600,140);
        image(Sprite,790,100);
        image(trainer,50,455);


        text("HP: " + p1health, 150, 575);
        text("HP: " + p2health, 540, 150);
        // Charizard Moves
    //   Fire Blast
        fill("red")
        rect(500,450,255,50);
        fill(0)
        text("Fire Blast", 515,490)

    // Draco Meteor
        fill("blue")
        rect(500,510,255,50);
        fill(0)
        text("Draco Meteor", 500,550)
        //Skuntank Moves
    // Headbutt
        fill("gray");
        rect(270,110,225,50)
        fill("black");   
        text("Headbutt", 295,148);

    // Poison Jab
        fill("purple");
        rect(270,170,225,50)
        fill("black");   
        text("Posion Jab", 278,210);
    }  
    else if (gameMode == 1 ){
        background("cyan");
        fill("black");
        text("You Won!!",500,500);    }
}
// Fire Blast
function mouseClicked(){
    if( mouseX>500 && mouseX<700 && mouseY>450 && mouseY<800){
        p2health -=Math.floor (Math.random() *137);
        fireBlastSound.play()
        if(p2health <= 0)
        {
            gameMode = 1;          
            
            }
// Headbutt
    }
    else if(mouseX>270 && mouseX<495 && mouseY>110 && mouseY<460){
        p1health -=Math.floor(Math.random() *13);  
        tackleSound.play();
    }  
//     if (mouseX>)
// }
}
