// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

const findLongestWord = (str) => {
  let strArr = str.split(" "),
    longest = 0;
  for (let i = 0; i < strArr.length - 1; i++) {
    longest = strArr[i].length < strArr[i + 1].length ? i + 1 : longest;
  }
  return strArr[longest];
};

findLongestWord("Web Development Tutorial");
