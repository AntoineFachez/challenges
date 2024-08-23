export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + " " + person.lastName);
}

export function getNameAndAge(people) {
  return people.map((person) => person.lastName + ` (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  const peopleOlderThan = people.filter((person) => person.age > age);
  return peopleOlderThan.map(
    (person) => person.firstName + " " + person.lastName
  );
}

export function getPeopleByLastName(people, lastName) {
  const filterPeopleByLastName = people.filter(
    (person) => person.lastName === lastName
  );
  return filterPeopleByLastName;
}

export function findPersonById(people, id) {
  const foundPersonById = people.find((person) => person.id === id);
  return foundPersonById;
}

export function isAnyoneOlderThan(people, age) {
  const foundIsAnyOneLoderThan = people.some((person) => person.age > age);
  return foundIsAnyOneLoderThan;
}

export function getFullNamesSortedByAge(people) {
  const sortedPeope = people.sort((a, b) => a.age - b.age);
  return sortedPeope.map((person) => person.firstName + " " + person.lastName);
}
