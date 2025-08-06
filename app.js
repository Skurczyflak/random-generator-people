const fs = require('node:fs');

const gender = ['M', 'F'];
const firstNames = {
    males: ['James', 'Michael', 'John', 'Robert', 'David'],
    females: ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth'],
};
const lastNames = ['Smith','Johnson', 'Williams','Brown', 'Jones'];
let pepole = []

const randChoice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

function generatePhoneNumber() {
  const areaCode = Math.floor(Math.random() * 900) + 100; // 3 digits
  const prefix = Math.floor(Math.random() * 900) + 100; // 3 digits
  const lineNumber = Math.floor(Math.random() * 900) + 100; // 3 digits
  return `${areaCode}-${prefix}-${lineNumber}`;
}

for(let i = 0; i < 19; i++){
    const randGender = randChoice(gender);
    const randFirstName = randChoice(randGender === 'M' ? firstNames.males : firstNames.females);
    const randLastName = randChoice(lastNames);
    const randAge = Math.floor(Math.random() * 61) + 18;
    let person = {
        gender: randGender,
        firstname: randFirstName,
        lastname: randLastName,
        age: randAge,
        email: `${randFirstName.toLowerCase()}.${randLastName.toLowerCase()}${randAge}@email.com`,
        phone: generatePhoneNumber(),
    };
    pepole.push(person);
}

const data = JSON.stringify(pepole);

fs.writeFile('pepole.json', data, (err) => {
  if (err) console.log("Something went wrong", err);
  console.log('File has been successfully generated! Check people.json');
});