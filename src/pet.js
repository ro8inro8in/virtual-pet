const pet = new Pet("Fido");
pet.name;

//constructor functions
//object Pet 
function Pet(name) {
  this.name = name;
  this.age = 0;
  this.appetite = 0;
  this.fitness = 10;
  
  
 //methods maybe I need if statements 
  }
Pet.prototype.growUp = function(){
    this.age += 1;
}
  Pet.prototype.feed = function (){
    //this.appetite += 5;
  if (this.appetite === this.age){
      return this.appetite +=5;
  }
}
Pet.prototype.gettingOld = function(){
   // this.fitness -= 3;
   if (this.fitness !== this.age){
       return this.fitness -= 3;
    }
}



 

//if growUp applies to this.age 
// if appetite is equal to age then + 5 to hunger 
// 



module.exports = Pet;
