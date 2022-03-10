// 2.	Given an array of objects. Every object is an identity card of a person.
// We need to keep only unique values in this array. Implement a function that will do this work.

const fs = require('fs');

let identityCards = fs.readFileSync('task2-data.json', 'utf8');
identityCards = JSON.parse(identityCards);

console.log(identityCards.length);

function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name === arr[j].name) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

console.log(unique(identityCards));

console.log(identityCards.length);

// node ./HW-3-task2
