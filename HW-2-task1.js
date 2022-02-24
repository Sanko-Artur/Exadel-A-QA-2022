// Implement a function called pinCodeGenerator. This function should take one argument called length and
// return a randomly generated pin code of a given length.

// For example,  pinCodeGenerator(5) → 73473

function pinCodeGenerator(length) {
  let pin = '';

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  for (let i = 1; i <= length; i++) {
    const num = Math.ceil(random(1, 9));
    pin += num;
  }
  console.log(Number(pin));
}

pinCodeGenerator(6);

// node ./HW-2/HW-2-task1
