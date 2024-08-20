test("getAnimals() returns a string 'I do not like animals at all!' if called without arguments.", () => {
  const result = getAnimal();
  expect(result).toBe("I do not like animals at all!");
});
