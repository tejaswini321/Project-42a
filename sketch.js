const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var drops = [];
var engine;
var world;
var droplets;
var maxDrops = 100;
var thunder,umbrella,img1,img2,img3,img4,thunderframe;

function preload(){
    img1 = loadImage("thunderbolt/1.png");
    img2 = loadImage("thunderbolt/2.png");
    img3 = loadImage("thunderbolt/3.png");
    img4 = loadImage("thunderbolt/4.png");
}

function setup(){
   createCanvas(400,600);

   engine = Engine.create();
   world = engine.world;

   if(frameCount % 70 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,displayWidth), random(0,displayWidth)))
        }
   }
   umbrella = new Umbrella();
    
}

function draw(){
    Engine.update(engine);
    background("black");

    umbrella.display();

    var rand = Math.round(random(1,4));
    if(frameCount% 100===0){
      thunderframe = frameCount;
       thunder = createSprite(random(0,400),random(0,50),50,50);
       switch(rand){
         case 1: thunder.addImage(img1);
                  break;
         case 2: thunder.addImage(img2);
                  break;
         case 3: thunder.addImage(img3);
                  break;
         case 4: thunder.addImage(img4);
                  break;
         default:break;
       }

       thunder.scale = (random(0.5,1));
    }

  for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
  }
  
  if(thunderframe + 15 === frameCount && thunder){
      thunder.destroy();
  }

    drawSprites();
}   

