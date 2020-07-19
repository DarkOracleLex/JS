/* The main idea is to count 
all the occurring characters in a string. 
If you have a string like aba, 
then the result should be {'a': 2, 'b': 1}.

What if the string is empty? 
Then the result should be empty object literal, {}. */

function count(string) {
  if (string) {
    return string.split("").reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
  }
  return {};
}

console.log(count("aba"));
console.log(count(""));

/* Решение с CodeWars:
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
} */
