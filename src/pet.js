const pet = new Pet("Fido");
pet.name;

//const MAXIMUM_AGE = 50;
const MAXIMUM_FITNESS = 10;
//const MAXIMUM_APATITE = 20;
//
//---------------------------------------
//-------constructor functions-----------
//-----------object Pet------------------ 
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.appetite = 0;
  this.fitness = 10;
 
 //methods 

  }
Pet.prototype.growUp = function(){
    this.age += 1;
    this.appetite +=5
    this.fitness -= 3;
}/*
Pet.prototype.growUp = function() {
  if ((this.age += 1) <= MAXIMUM_AGE) {
  } else {
    this.age = MAXIMUM_AGE;   
  }*/
  
/*Pet.prototype.growUp = function() {
  if ((this.age += 5) >= MAXIMUM_APATITE) {
    this.appetite
  } else {
    this.age = MAXIMUM_APATITE;   
  } */

Pet.prototype.walk = function() {
  if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
    this.fitness += 4;
  } else {
    this.fitness = MAXIMUM_FITNESS;
    
  }
}


//if growUp applies to this.age 
// if appetite is equal to age then + 5 to hunger 
// 



module.exports = Pet;
