console.log('word.js is connected');

class Word  {
  constructor(word) {

  this.word=word;
  this.letters=[];
  this.setLetters(word);
  }


  setLetters(word) {
    for (var i=0;i<word.length;i++){
      this.letters.push(new Letter(word[i]));

    }

  }
//returns true if all letters in the word are guessed or revealed
  isGuessed () {
    let found =true;
    for (var i=0; i<this.letters.length; i++) {
    if (this.letters[i].hidden === true) {
        found=false;
        }
    }
    return found;

  }
//this function checks if a letter attempt on a word is true and then shows/reveals letter
    attempt(letter) {
    let checkAttempt=false;
      for(var i=0;i<this.letters.length;i++){
        if (letter===this.letters[i].value) {
          checkAttempt=true;
          this.letters[i].reveal();
          $('#s'+i).append(this.letters[i].value);
        }

      }
      if(checkAttempt){
        return true;
      }
      else {
        return false;
      }

  }

  //This function displays word as it is currently guessed, ie which letters have been and have not been guessed
    create() {
    let fullword = [];
    for (let i = 0; i < this.letters.length; i++) {
    // $('#s'+i).append(this.letters[i].create());
      fullword.push(this.letters[i].create());


    }
    // return fullword.join(" ");
    return fullword.join();
    }



}
