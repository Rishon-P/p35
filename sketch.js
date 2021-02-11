//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
dog_standing = loadImage("images/dogImg.png")
dog_sitting = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
  dog = createSprite(250,250)
  dog.addImage("i",dog_standing)  
  dog.scale = 0.5
}


function draw() {  

  background(46,139,87)

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dog_sitting)
  }

  textSize(20)
  fill(0)
  stroke(0)
  text("Note:Press UP_ARROW Key To Feed Drago Milk!")  

  drawSprites();
 
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else {
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}

