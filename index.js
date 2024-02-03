
const flipWords =(word) => {
  theArray = word.split('')
  reversedArray = theArray.reverse()
  joinedWord = reversedArray.join('')
  return joinedWord
}



function isPalindrome(word) {
const palin = flipWords(word)
if(word === palin) {
  return true
}else{
  return false
}
}

/* 
  Add your pseudocode here
*/ //Word needs to be the same word reveresed
//reverse the string and compare the result
//write a functiion that reverses words
//than use an if statement to compare words.


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
