const pet = new Pet("Fido");
pet.name;

//const MAXIMUM_AGE = 50;
const MAXIMUM_FITNESS = 10;
const MAXIMUM_APPETITE = 20;
const MINIMUM_APPETITE = 0;
const FOOD = 3

//---------------------------------------
//-------constructor functions-----------
//-----------object Pet------------------
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.appetite = 0;
  this.fitness = 10;
  
}

//methods
Pet.prototype.growUp = function () {
  this.age += 1;
  this.appetite += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  
  if (this.appetite >= 3 ) {
    this.appetite -= 3;
  } else {
    this.appetite = MINIMUM_APPETITE ;
  }
};
 

Pet.prototype.checkUp = function () {
  
  if (this.fitness <= 3 && this.appetite >= 5) {
    return "I am hungry and I need a walk";
  } else if (this.fitness <= 3) {
    return "I need a walk";
  } else if (this.appetite >= 5) {
    return "I am hungry";
  } else return "I feel great!";
};

module.exports = Pet;
