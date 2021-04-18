var player, playerImage, background1, background1Image
var invGround;
var playerClimb

function preload() {
    playerWalk = loadAnimation("character_walk/1.png",
        "character_walk/2.png",
        "character_walk/3.png",
        "character_walk/4.png", "character_walk/5.png", "character_walk/6.png")

//         playerWalk = loadAnimation("1.png","2.png","3.png")

        zombieWalk = loadAnimation("walk/1.png",
        "walk/2.png","walk/3.png","walk/4.png")

        zombieDead = loadAnimation("Attack/1.png",
        "Attack/2.png","Attack/3.png","Attack/4.png") 
        background1Image = loadImage("bg.jpg")

    // playerClimb = loadAnimation("PNG/Rogue/Climb/climb1.png")
    hellicopterImage  = loadAnimation("helicopter/0.png","helicopter/1.png","helicopter/2.png");
}

function setup() {
    createCanvas(780, 500);

    background1 = createSprite(400, 300)
    background1.addImage(background1Image)
    background1.scale = 0.8

    helicopter = createSprite(320,100)
    helicopter.addAnimation("cage", hellicopterImage)
    helicopter.visible = false;

    invGround = createSprite(400, 580, 800, 10)
    invGround.visible = false

    player = createSprite(80, 400, 50, 50);
    player.addAnimation("walk", playerWalk)
    // player.addAnimation("climb", playerClimb)
    player.scale = 2.9
    //player.debug = true
    player.setCollider("circle", -20, 20, 30)
    background1.velocityX = -2

zombieGroup = createGroup()
}



function draw() {
    background("lightBlue")
    //jump
    if (keyDown("space") && player.y > 350) {
        player.velocityY = -20
    }
    // gravity
    player.velocityY += 0.8

    player.collide(invGround)
    // scroll background
    if (background1.x < 100) { 
        background1.x = 400
    }

    drawSprites();
     zombies()
if(zombieGroup[0]!== undefined){
     if(player.isTouching(zombieGroup[0])){
         helicopter.visible = true;
         zombieGroup[0].velocityX = 2
         zombieGroup[0].velocityY = -5
        zombieGroup[0].changeAnimation("Dead")
        zombieGroup[0].lifetime = 50
     }
}
}

function zombies(){
    if(frameCount %100 == 0){
var zombie = createSprite(780 , 450  )
   zombie.velocityX = -3 
 zombie.addAnimation("zombie" ,zombieWalk)
 zombie.addAnimation("Dead" ,zombieDead)
zombie.scale = 0.2
zombieGroup.add(zombie)
}
}

