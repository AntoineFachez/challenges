export function getAnimal(argument) {
  if (argument === undefined) {
    return "I do not like animals at all!";
  } else if (typeof argument === "string") {
    return `'I like ${argument}!'`;
  } else if (argument === "cats") {
    return "I totally love cats!";
  }
}
console.log(getAnimal());
console.log(getAnimal("dogs"));
console.log(getAnimal("cats"));
