const MAX_X_MM = 297;
const MAX_Y_MM = 420;
let width = 600;
let height = 600;

let pointsData1;
let pointsData2;
let pointsData3;

let img1;
let img2;
let img3;

let button1;
let button2;
let button3;


const axi = new axidraw.AxiDraw();
let connected = false;


function preload(){
//pointsData1 = loadJSON('word_coordinates/2008.json');
//pointsData2 = loadJSON('word_coordinates/chocolate.json');
//pointsData3 = loadJSON('word_coordinates/diosito.json');

img1 = loadImage('hands.jpg');
img2 = loadImage('heart.jpg');
img3 = loadImage('flower.jpg');

}


function setup(){
   
createCanvas(width,height);
textAlign(CENTER);
colorMode(RGB,255);
rectMode(CENTER);

//asigning images as buttons

button1 = createImg('hands.jpg','children holding hands');
button1.size(100,100);
button1.position(290,147);
 button1.mousePressed(button1Pressed);
 button1.hide();

button2 = createImg('flower.jpg','a white flower with grass');
button2.size(140,140);
button2.position(35,110);
button2.mousePressed(button2Pressed);
button2.hide();

button3 = createImg('heart.jpg','clipart image of a red crystal heart');
button3.size(60,60);
button3.position(220,430);
button3.mousePressed(button3Pressed);
button3.hide();


}//end of function setup 

    
function keyPressed(){
    if(!connected) {
        axi.connect()
        .then(() => {
            connected = true;

        } );
return;

    }
}// end of function key pressed







function button1Pressed(){
console.log('button1 pressed');

two_thousand_eight.forEach(function arrays(array,index){

  array.forEach(function drawCoordinates(coordinates,subIndex){
   if (subIndex === 0) {
     axi.penUp();
   } else {
     axi.penDown();
   }
 
   console.log(coordinates.x, coordinates.y);
   axi.moveTo(coordinates.x, coordinates.y);
 });//end of each coordinates array
 axi.penUp();
 axi.moveTo(0,0);
 });//end of chocolate array

}


function button2Pressed(){
console.log('button 2 pressed');

chocolate.forEach(function arrays(array,index){

 array.forEach(function drawCoordinates(coordinates,subIndex){
  if (subIndex === 0) {
    axi.penUp();
  } else {
    axi.penDown();
  }

  console.log(coordinates.x, coordinates.y);
  axi.moveTo(coordinates.x, coordinates.y);
});//end of each coordinates array
axi.penUp();
axi.moveTo(0,0);
});//end of 2008 array
}


function button3Pressed(){
console.log('button 3 pressed')

diosito.forEach(function arrays(array,index){

  array.forEach(function drawCoordinates(coordinates,subIndex){
   if (subIndex === 0) {
     axi.penUp();
   } else {
     axi.penDown();
   }
 
   console.log(coordinates.x, coordinates.y);
   axi.moveTo(coordinates.x, coordinates.y);
 });//end of each coordinates array
 axi.penUp();
 axi.moveTo(0,0);
 });//end of diosito array

}





function draw(){
    if(!connected) {
     background(34,67,53);
     fill(186, 201, 212);
     textSize(20);
     text('🔑',300,200);

        
        text('press any computer key to connect', width/2, height /4);
        return;
    } else {
        background(244, 245, 242);
        
        button1.show();
        button2.show();
        button3.show();
  
        stroke(155, 169, 179);
        strokeWeight(2);
         
          for(let i=0;i<600;i+=40){
            for(let j=0;j<600;j+=20){
              
               line(i,j,i,j);
                line(j,i,j,i);
          }
       }
      
      
     fill(63, 41, 207,255);
      noStroke();
      textSize(20);
     
      //outline of the land on the map
      push();
       fill(117, 166, 10,100);
      noStroke();
        rect(300,100,40);
        rect(260,140,40);
      rect(60,540,40);
      rect(300,300,120);
      
      rect(220,350,40,220);
      rect(190,220,220,40);
      rect(360,240,100,40)
      rect(300,140,40,200);
      rect(145,540,120,40);
      rect(160,300,80,120);
      rect(175,395,50);
      rect(180,420,15)
      circle(360,380,160);
      circle(120,300,40);
      pop();
      
      
      stroke(255,0,0,200);
    }

   


}



