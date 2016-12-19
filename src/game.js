console.log('game.js is connected');


//Game class is responsible for initialzing variables and the actual puzzle central to the Word Guess game
class Game {
  constructor() {

  this.guesses=null;
  this.lettersGuessed=null;
  this.currentWord=null;
  this.score=null;
  this.numberofsquares=null;
  }
  //This function or method helps start Word Guess game with a new  word, as indicated by its parameter word
  // and sets the tiles for the word puzzle , initializes score, guesses, and the lettersGuessed array
  startGame (word) {
    $('.status').html('Welcome to Word Guess please use the keyboard to guess a letter, start with vowels');
    $('.wordgame').append('<div class="worddiv"></div>')
    if(word.length>16){
    this.guesses=Math.floor(word.length/2);}
      else{this.guesses=7;}
      this.score=0;
    $('.score h5').html('SCORE: '+this.score);
    this.lettersGuessed=[];
    $('.lettersGuessed').html('LETTERS GUESSED: '+this.lettersGuessed.join(" "))
    this.currentWord=new Word(word);
    this.numberofsquares=word.length;
    for (let i=0;i<this.numberofsquares;i++){
      $('.worddiv').append('<div class="square" id="s'+i+'"></div>');

    }
    this.currentWord.create()

  }

//This method is tied to keyboard input in app.js file, and allows to user to guess letters in word

    guess(letter) {

       if (this.lettersGuessed.indexOf(letter)===-1) {
           this.lettersGuessed.push(letter);
          $('.lettersGuessed').html('LETTERS GUESSED: '+this.lettersGuessed.join(" "))
           if(this.currentWord.attempt(letter)){
            //  $('.word').html()
             this.currentWord.create();
             console.log("Letter is present");
             $('.status').html(`Keep going...You have ${this.guesses} guesses left`);
             this.score+=50;
             $('.score h5').html('SCORE: '+this.score)

           }
          else {  //  if (!(this.currentWord.try(letter)))
               console.log('sorry this letter is not in the word');
              //  $('.word').html()
              this.lettersGuessed.push(letter);
              $('.lettersGuessed').html('LETTERS GUESSED: '+this.lettersGuessed.join(" "))
              this.currentWord.create();
               this.guesses-=1;
               $('.status').html(`Sorry, no ${letter.toUpperCase()}... You have ${this.guesses} guesses left`);
               this.score-=5;
               $('.score h5').html('SCORE: '+this.score)

           }
       }
       else {
         console.log('you guessed this letter already. guess another letter');
         $('.status').html(`You guessed this letter already, you have ${this.guesses} guesses left`);
         this.guesses=this.guesses;

       }
       if (this.isFinished()){
           this.endGameMsg();
          //  return true;
         }
        //  console.log(this.isOver()+' '+this.render()+' '+this.overMessage());


 }

//Checks if game is finished
  isFinished () {
    if(this.guesses===0||this.currentWord.isGuessed()===true){
      return true;

    }

    else {
      return false;
    }

  }

//this method returns a message in the status h2 tag under the game title, displaying the user their score total
//and whether the user solved the puzzle in the given amount of tries
  endGameMsg() {
     if(this.guesses===0){
      $('.status').html(`Sorry you lost, your score this game was ${this.score}.. start a new game!`);
      $('.worddiv').remove();

    }

    else if (this.currentWord.isGuessed()){
      this.score+=100;
      $(".status").css("font-family", "Arvo, serif");
      $('.status').html(`Victory is Yours! The word was ${this.currentWord.create()} your score this round was ${this.score}!`);
      $('.worddiv').remove();
    }
    else{
      return undefined;
    }

  }


}
