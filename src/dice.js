class Die {
  constructor(sides, probabilities){
    this.sides = sides;
    this.probabilities = probabilities;
    sides > 1;

    var sum = 0;

    if (arguments.length== 2){

      this.probabilities = arguments[1];
      for (let i = 0; i < probabilities.length; i += 1) {
        if (probabilities[i] <= 0) {
          throw new Error("Negatives probabilities not allowed").message;
        }
        
        if (isNaN(probabilities[i]) == true){
          throw new Error("Only integer values allowed").message;
        }
      }
      sum += arguments[i]
      if (sum < 0) {
        throw new Error("Sum cannot be less than 0")
      }
    }
}
  
  roll(){
    let rand =  (this.value = Math.floor(Math.random(1 - 6) * this.sides) + 1);
    return this.value = rand;
  }
 

  setProbabilities(probabilities){
    this.probabilities = probabilities;
    this.weightedDice();
  }
  weightedDice(){
    let list = [];
    for(var i=1;i<= this.sides;i++){
      for(var index=0;index < this.probabilities[i - 1]; index++){
        list.push(i);
      }
    }
    this.value = list[this.roll()];
  }
}


class DiceFactory extends Die{
  constructor(dice){
    this.dice = dice
    if (probabilities.length == 2){
      
    }
  }
  makeDie(){
    return(this.dice)
  }
}

let dice2= new Die(6);
dice2.setProbabilities([1,3,6]);
dice2.roll();
//dice2.setProbabilities([1,1,1,1,1,2]);
console.log(dice2);
