//THIS IS WHERE THE GAME IS INITIALIZED THROUGH EVENT LISTENERS WAITING FOR USER INPUTS THROUGH KEYBOARD
//AND CLICK ON THE START GAME BUTTON

$(document).ready(function () {

//This is Array of words to solve
var wordGuess=['ANTEDILUVIAN','BEGUILE','BESMIRCH','CIRCUMLOCUTION','CONFLAGRATION','PREPSOTEROUS','UNDERACHIEVER', 'SERENDIPITOUS','GREGARIOUS', 'CHARLATAN', 'MACHIAVELLIAN','HEGEMONY',
'CLAIRVOYANT','KLEPTOMANIAC','PNEUMONIC','PROSLEYTIZE','AMALGAMATION','SERENGETI','RUMINATE','EMBEZZLEMENT','IMPERTINENT','MODICUM', 'NARCOLEPSY','NIHILISTIC','OBSEQUITOUS',
'PHILANTHROPY','HABERDASHERY','REPUDIATE','REPUGNANT','SYCOPHANT','SUPERANNUATED','SYBILLINE','VOCIFEROUS','ZENITH','ZOROASTRIAN'];

//this creates new instance of class Game object
let hangmangame=new Game();

//This code here sets a random number which is then assigned to the wordGuess array and a startGame method
//from game Class is called with this random word from wordGuess array , starting new game (line 17)
var rand=Math.floor(Math.random()*wordGuess.length);
hangmangame.startGame(wordGuess[rand]);
let c=hangmangame.currentWord;

console.log(c);

//This is an event listener that checks only for alphabet keyboard input from the user, ie it listens for
//inout with keycodes bewteen 64 and 91, representing all the 26 letters.
$(document).on("keydown", (e) => {
  console.log(String.fromCharCode(e.keyCode));
  if(e.keyCode>64 && e.keyCode<91){
  hangmangame.guess(String.fromCharCode(e.keyCode).toUpperCase());
}
});

//Event listener for start game button, that creates a new game
$('.start').on('click', (e) => {hangmangame.startGame(wordGuess[rand])});


});
