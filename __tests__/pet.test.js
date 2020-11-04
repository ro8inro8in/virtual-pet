const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name of the property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
});

describe('constructor', () => {
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
  
      expect(pet.age).toEqual(0);
    });
});

describe('constructor', () => {
      it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        
        pet.growUp();
    
        expect(pet.age).toEqual(1);
  });
});

describe('constructor', () => {
  it('has a initial hunger of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.appetite).toEqual(0);
  });

});

describe('constructor', () => {
  it('increase hunger in increments of 5 as pet ages', () => {
    const pet = new Pet('Fido');

      pet.feed();

    expect(pet.appetite).toEqual(5);
  });

  });

describe('constructor', () => {
  it('has a initial fitness level of 10', () => {
    const pet = new Pet('Fido');

    expect(pet.fitness).toEqual(10);
  });
});

describe('constructor', () => {
  it('decrease fitness in increments of 3 as pet ages', () => {
    const pet = new Pet('Fido');

      pet.gettingOld()

    expect(pet.fitness).toEqual(7);
  });

});
