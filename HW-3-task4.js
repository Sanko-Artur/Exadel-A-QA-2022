// 4.	Extend build-in class string with a method called removeSpecialCharacters.
// This method should work for every string created within your js file.
// For example ‘HE!!LL??OO’.removeSpecialCharacters() => ‘HELLO’

let str = 'H!!??!@#$E%^&L*() {}[L]|/-++ -O=/?.>,< O';

String.prototype.removeSpecialCharacters = function () {
  const pattern = /[^\w]/gi;

  for (letter of str) {
    const result = pattern.test(letter);

    if (result === false) {
      str = str.replace(pattern, '');
    }
  }

  return str;
};

console.log(str.removeSpecialCharacters());

// node ./HW-3-task4
