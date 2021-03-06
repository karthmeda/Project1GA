# <center> WORD GUESS GAME </center>
<br>

![Screen Shot of the game](src/wordguess.png)



## RULES OF THE GAME
In Word Guess the player is given a random word puzzle to solve, and is awarded 50 points on each correct letter, 5 points deducted if a letter guessed incorrectly, and 100 points if word is guessed. The player has 7 tries for words of 16 characters or less, and the guesses are half of the words length, for words with greater than 18 characters. (i.e if a word is 18 letters long, you get 9 chances, and so forth)


## IMPLEMENTATION
As stated in project requirements for classes to be used, I utilized classes for the outcomes of letter, word and game respectively, eventually creating an app.js file where I use DOM manipulation through jquery (as well as in the game.js file) to start a Word guess game using the logic from the aforementioned classes


## TECHNOLOGIES USED

For this project I used :
- Javascript
- HTML
- CSS
- Jquery



## CODE EXAMPLE

```javascript
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

```

## Build Strategy

My strategy was to build this game similar to wheel of fortune look and feel wise, and to build upon this game in the future. Some of the build strategy for this game by classes, came through the hangman jasmine homework, which I thank GA for.



## Contributors
The main contributor is GA and Hakuna Matata, who helped me come up with the logic of a word game, through class work and the hangman exercise. Joe Keohan through whiteboarding exercises helped me stay focused on deliverables for this project, and what to focus on.  I also took asked for help from Tenzin Chosphel for Event Listeners, and inheritance from classes as well as looking up JQuery documentation for  DOM manipulation

## Complications/Future Improvements

- I wanted to build this game as a starting block for a full fledged Wheel of Fortune browser game, an ode to my childhood and the fun times guessing word puzzles with family. I
set out to mimic the look and feel of the game, at least without the wheel. But I hit a roadblock when converting this game logic to classes from functions, due to inheritance, and some limitations on using attributes from one or more classes.

- I could not figure out how to remove child elements say 4 seconds, after the end of the game, (in this case the letter squares from the green letter or word board), without it happening repetitively, through setInterval.

- I also wanted to be be able to flip letters
on a guess, just as Vanna White would turn a letter tile.

- I will look to expand this game to sentences and phrases, but could not properly account for special characters like ?''& etc, as well as ensuring the letter squares/tiles are centered and properly displayed..  I'm not far off though.

## Authors

- Karthik Meda
- General Assembly
- Joe Keohan
