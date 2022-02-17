/*
2. Print numbers from 1 to 100 in the console. If the number is divisible by 3 without a remainder, 
then print the “number is divisible by 3” to the console. If the number is divisible by 5 without a remainder, 
then print to the console “the number is divisible by 5”. If the number is divisible by both 3 and 5 without a remainder, 
then you will output to the console “the number is divisible by 3 by 5”.
*/

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`the number ${i} is divisible by 3 by 5`);
  } else if (i % 3 === 0) {
    console.log(`the number ${i} is divisible by 3`);
  } else if (i % 5 === 0) {
    console.log(`the number ${i} is divisible by 5`);
  } else {
    console.log(i);
  }
}

// node ./HW-1-task2
