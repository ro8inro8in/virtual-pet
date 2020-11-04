const pet = new Pet("Fido");
pet.name;

function Pet(name) {
  this.name = name;
  this.age = 0;
  /*this.growUp = function (){
    this.age++;
  }*/
Pet.prototype.growUp = function() {
    this.age += 1;
};

};


module.exports = Pet;
