// There is a function which counts all vowels in a given string, but for some reason I don’t work as expected.
// Find out the problem and fix it.
// const vovelsCounter = (str) => {
//     	    const vovels = ['a', 'e', 'i', 'o', 'u']
//     	    let counter = 0
//     	    for(letter of str){
//              if(vovels.includes(letter)){
//                  counter = counter + 1
//         	  }
//     	    }
//     	    return counter
// }

// vovelsCounter('The current directory is AD-123')
// expected output → 8
// actual output → 7

const vovelsCounter = (str) => {
  // or const newStr = str.toLowerCase();
  const vovels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // ['a', 'e', 'i', 'o', 'u']
  let counter = 0;
  for (letter of str) {
    //(letter of newStr)
    if (vovels.includes(letter)) {
      counter = counter + 1;
    }
  }
  return counter;
};

console.log(vovelsCounter('The current directory is AD-123'));

// node ./HW-2/HW-2-task4
