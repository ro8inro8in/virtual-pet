const pet = new Pet("Fido");
pet.name;

//constructor functions
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.appetite = 0;
  this.fitness = 10;
  
  
  }
Pet.prototype.growUp = function() {
    this.age += 1;
}
Pet.prototype.feed = function () {
    this.appetite += 5;
  }
Pet.prototype. gettingOld = function(){
    this.fitness -= 3;
}  





module.exports = Pet;
