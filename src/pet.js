const pet = new Pet("Fido");
pet.name;

const MAXIMUM_FITNESS = 10;
const MINIMUM_FITNESS = 3;
const MINIMUM_APPETITE = 0;


function Pet(name) {
  this.name = name;
  this.age = 0;
  this.appetite = 0;
  this.fitness = 10;
  this.child = [];
}
Pet.prototype = {
  get isAlive() {
    return this.age <= 30 && this.appetite <= 10 && this.fitness > 0;
  },
};

//methods
Pet.prototype.growUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is dead :(");
  }
  this.age += 1;
  this.appetite += 5;
  this.fitness -= MINIMUM_FITNESS;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is dead :(");
  }
  if (this.fitness + 4 <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is no longer alive :(");
  } else if (this.appetite >= 3) {
    this.appetite -= 3;
  } else {
    this.appetite = MINIMUM_APPETITE;
  }
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error("Your pet is dead :(");
  }
  if (this.fitness <= MINIMUM_FITNESS && this.appetite >= 5) {
    return "I am hungry and I need a walk";
  } else if (this.fitness <= MINIMUM_FITNESS) {
    return "I need a walk";
  } else if (this.appetite >= 5) {
    return "I am hungry";
  } else return "I feel great!";
};
Pet.prototype.adoptChild = function (name){
  if (!this.isAlive) {
    throw new Error("Your pet is dead :(");
  }
  this.child =  [{"age": 0, "appetite": 0, "child": [], "fitness": 10, "name": "Amelia"}]
  
};

module.exports = Pet;
