var img1;

var sounds;
var selectedSound;
var detectedWord;


var audioPlayed = false;

var lastAudioPlayed = 0;
const settlePeriod = 4000;

var musicFiles = ["music/casa.mp3", "music/dios.mp3", "music/enamorada.mp3", "music/ayuda.mp3", "music/mercado.mp3", "music/plan.mp3", "music/tonta.mp3", "music/llorar.mp3",
 "music/viaje.mp3", "music/youtube.mp3","music/hola.mp3"];




function preload(){
   
  sounds = Array(musicFiles.length);


  for (let i = 0; i < musicFiles.length; ++i) {
    sounds[i] = loadSound(musicFiles[i]);
  }

  img1 = loadImage("women_gossiping.jpg");
  
}




function setup() {
    
    let WIDTH = 1000;
    let HEIGHT = 600;

    createCanvas(WIDTH,HEIGHT);
    pixelDensity(0.4);

   speechRec = new p5.SpeechRec  ('es-CO',gotSpeech);
   
   speechRec.continuous = true;
   speechRec.interimResults = true;

 
   

//creating a button for user to press to start speech detection
   buttonBeginSpeech = createButton('press to speak !');
   buttonBeginSpeech.mousePressed(startSpeech);

//creating a button to stop speech detection    
buttonStopSpeech = createButton("press after you've finished speaking");
buttonStopSpeech.mousePressed(stopSpeech);

//creating a button to reset the boolean variable to false when the user wants to 
//say something else

buttonResetSpeech = createButton ('press before telling me something new')
buttonResetSpeech.mousePressed(resetSpeech);
    }

function startSpeech(){
      speechRec.start();
}
function stopSpeech(){
      speechRec.stop();
}
function resetSpeech(){
 audioPlayed = false;
}
   
function gotSpeech(){
    console.log(speechRec);
    if (speechRec.resultValue){
     detectedWord = speechRec.resultString;
     console.log('Detected Word:', detectedWord);

     if(millis()- lastAudioPlayed > settlePeriod){
      switch (detectedWord){
        case "ayuda":
          console.log('playing sound for ayuda');
          selectedSound = sounds[3];
          selectedSound.play();
          audioPlayed = true;
          lastAudioPlayed = millis();
          break;
        case "cocina":
          console.log('playing sound for cocina');
          selectedSound = sounds[0];
          selectedSound.play();
          audioPlayed = true;
          lastAudioPlayed = millis();
          break;  
        case "Dios":
          selectedSound = sounds[1];
          selectedSound.play();
          audioPlayed = true;
          lastAudioPlayed = millis();
          break;
        case "enamorada":
          selectedSound = sounds[2];
          selectedSound.play();
          audioPlayed = true;
          lastAudioPlayed = millis();
          break;
        case "mercado":
          selectedSound = sounds[4];
          selectedSound.play();
          audioPlayed = true;
          lastAudioPlayed = millis();
          break; 
        case "plan":
          selectedSound = sounds[5];
          selectedSound.play();
          audioPlayed = true;
          lastAudioPlayed = millis();
          break; 
        case "tonta":
          selectedSound = sounds[6];
          selectedSound.play();
          audioPlayed = true;
          lastAudioPlayed = millis();
          break; 
        case "llorar":
          selectedSound = sounds[7];
          selectedSound.play();
          audioPlayed = true;
          lastAudioPlayed = millis();
          break;
        case "viaje":
          selectedSound = sounds[8];
          selectedSound.play();
          audioPlayed = true; 
          lastAudioPlayed = millis();
          break;
       case "hola":  
       selectedSound = sounds[9];
       selectedSound.play();
       audioPlayed = true;
       lastAudioPlayed = millis();
       break;       
        }
     }

    }

}


function draw() {
    
      background(222, 221, 200);
      

//darker yellow parts on sketch
      stroke(240, 237, 161);
      strokeWeight(20);

//pink oval in the center
      fill(245, 211, 229);
      ellipse(1000/2,600/2,650,290);
     

//turquoise flower
push();
      fill(189, 217, 222);
      translate(800, 200);
      noStroke();
      for (let i = 2; i < 20; i++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
     }
pop();
    
    textSize(50);
     text('cuentame...', 200,220);


 image(img1,450,280,300,200);

textSize(22);
noStroke();
fill(123, 176, 111);
text("i'll tell you what I think but you'll need to let me finish before i listen again", 65,110);




    }//end of function draw
    
    
    

    






  

  
  
