const Pet = require("../src/pet");

describe("Pet I.D", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name of the property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});
describe("Pet Attributes", () => {
  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");
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
    pet.growUp()
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

  describe("walk", () => {
    it("increases fitness by 4 to a maximum of 10", () => {
      const pet = new Pet("fido");

      pet.fitness = 8;
      pet.walk();

      expect(pet.fitness).toEqual(10);
    });
 
 
 
 
  });
});
