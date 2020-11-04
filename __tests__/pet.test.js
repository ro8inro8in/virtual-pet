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
