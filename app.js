const os = require('os');
const fs = require('fs');

const genders = ['m', 'f'];
const maleNames = ['John', 'James', 'Tom', 'Adam', 'Andy', 'Sam', 'Timothy', 'Dave', 'Steve', 'Paul', 'Jacob', 'Matthew'];
const femaleNames = ['Jenna', 'Yennefer', 'Linda', 'Samantha', 'Kate', 'Jessica', 'Eva', 'Lisa', 'Paris', 'Sandra', 'Emily', 'Emma' ];
const lastNames = ['Smith', 'Kowalsky', 'Bond', 'Wirth', 'Hamilton', 'Tallis', 'Porter', 'Jackson', 'Brown', 'Dread', 'Stone', 'Gray'];
const people = [];
const max = 78;
const min = 18;

for (let i = 0;  i < 20; i++) {
  const person = {
    gender: '',
    firstName: '',
    lastName: '',
    age: 0,
  };
  
  person.gender = genders[Math.floor(Math.random()*genders.length)];

  if (person.gender === 'm') {
    person.firstName = maleNames[Math.floor(Math.random()*maleNames.length)];
  } else {
    person.firstName = femaleNames[Math.floor(Math.random()*femaleNames.length)];
  }
  person.lastName = lastNames[Math.floor(Math.random()*lastNames.length)]
  person.age = Math.floor(Math.random() * (max - min + 1)) + min;
  people.push(person);
};

console.log(people);
const peopleJSON = JSON.stringify(people, null, 4);

fs.writeFile('people.json', peopleJSON, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});