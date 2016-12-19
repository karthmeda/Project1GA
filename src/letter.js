console.log('letter.js is connected');

//Letter constructor that has value and hidden attributes, that allow for a letter to be revealed , ie set hidden attribute
//to false through reveal() method and then display the letter in the word to be guessed through create()method
class Letter {
  constructor(value,hidden) {

    this.value=value;
    this.hidden=true;
  }
  reveal() {

    this.hidden=false;

  }
  create() {

    if(this.hidden){
      return " ";
    }
    else{
      return this.value;
    }

  }
}
