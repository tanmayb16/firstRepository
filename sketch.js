//Global Variables
var foodGroup, banana_image;
var obstacleGroup, obstacle_image;
var back_ground, background_image;
var player, player_running;
var score = 0;


function preload(){
 /* background_image = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  banana_image = loadImage("Banana.png");
  obstacle_image = loadImage("stone.png");*/
}


function setup() {
  createCanvas(400,400);
  back_ground = createSprite(0,0,400,400);
 // back_ground.addImage("running_background",background_image);
  back_ground.x=back_ground.width/2;
  back_ground.velocityX=-4;
  
  player = createSprite(50,360,20,50);
  //player.addAnimation("player_running",player_running);
  
  ground = createSprite(200,390,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  
  
  
  
}


function draw(){
  background(255);
  drawSprites();
}