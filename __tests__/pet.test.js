const Pet = require("../src/pet");
 
  describe("Pet I.D", () => {
   let pet 
    beforeEach(()=> {pet = new Pet('Fido')})
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name of the property", () => {
    //const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});
describe("Pet Attributes", () => {
  let pet 
    beforeEach(()=> {pet = new Pet('Fido')})
  it("has a initial age of 0", () => {
    //const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });

  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it("has a initial hunger of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.appetite).toEqual(0);
  });

  it("increase hunger in increments of 5 as pet ages", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    //pet.feed();
    expect(pet.appetite).toEqual(5);
  });

  it("has a initial fitness level of 10", () => {
    const pet = new Pet("Fido");
    expect(pet.fitness).toEqual(10);
  });

  it("decrease fitness in increments of 3 as pet ages", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

 describe("walk", () => {
    it("increases fitness by 4 to a maximum of 10", () => {
      const pet = new Pet("fido"); 
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    });
  });
describe("feed", () => {
  let pet 
    beforeEach(()=> {pet = new Pet('Fido')}) 
  it("Calling feed should decrease the Pet's hunger level by 3",  () => {
    pet.appetite = 5;
    pet.feed();
    expect(pet.appetite).toEqual(2)
   });
  });
describe("checkUp", () => {
  let pet 
    beforeEach(()=> {pet = new Pet('Fido')}) 
  it("if fitness falls below 3 return message", () => {
      pet.fitness =2; 
      expect(pet.checkUp()).toEqual("I need a walk");
    });
  it("if pet hunger gets above 5 return message",() => {
    //const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.checkUp()).toEqual("I am hungry");
  });
  it("if pet hunger is above 5 and fitness is below 3 return message ", () => {
  //const pet = new Pet("Fido"); 
  pet.growUp();
  pet.fitness = 2;
  expect(pet.checkUp()).toBe("I am hungry and I need a walk");
  });
 it("returns I feel great! if fitness level is 4 or more & hunger level is 4 or less", () => {
 // const pet = new Pet("Fido");  
  expect(pet.checkUp()).toBe("I feel great!")
});

});
describe("isAlive", () => {
  let pet 
    beforeEach(()=> {pet = new Pet('Fido')}); 
  it("if age is less than 30 & appetite is less than 10 and fitness is more than 0 your pet is happy", () => {
      pet.age = 0;
      pet.appetite = 0;
      pet.fitness = 10;

      expect(pet.isAlive).toEqual(false);
    });
  });




