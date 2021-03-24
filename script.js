//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = .4;
var guessCounter = 0;
var cluePauseTime = 400;
//GLobal Constants
const clueHoldTime = 1000; //hold time for clue's light and sound
//const cluePauseTime = 333; //pause time between clues
const nextClueWaitTime = 1000; 

function displayImg(btn){
  document.getElementById("toggle" + btn).style.display = "inline";
}
function hideImg(btn){
  document.getElementById("toggle" + btn).style.display = "none";
}
function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    for (let i = 0; i <= 7; i++){
      pattern[i] = Math.floor(Math.random() * Math.floor(6));
    }
    //hides Start button and displays End button
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("endBtn").classList.remove("hidden");
    playClueSequence();
}

function loseGame(){
  endGame();
  alert("Sorry you lost! Press Start to try again.");
}

function winGame(){
  endGame();
  alert("You won! If you would like to play again click the Start button.")
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress++; //increment progress
        cluePauseTime = cluePauseTime*.9;
        playClueSequence(); //play sequence including next hint
      }
    }
    else{
      guessCounter++; //increment guess counter
    }
  }
  else{ // if(btn!= pattern[guessCounter])
      loseGame(); //call lose game function on incorrect guess
  }
}

function endGame(){
    //initialize game variables
    gamePlaying = false;
  
    //hides Start button and displays End button
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("endBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 164.81,
  2: 220.00,
  3: 293.66,
  4: 392.00,
  5: 493.88
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)