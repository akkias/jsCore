// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh”]

const string_to_array = (string) => {
  let arr = string.split(" ");
  return arr;
};
string_to_array("Robin Singh");
