/* Given: an array containing hashes of names

Return: a string formatted as a list of names 
separated by commas except for the last two names, 
which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
returns 'Bart'

list([])
returns ''

Note: all the hashes are pre-validated 
and will only contain A-Z, a-z, '-' and '.'. */

function list(names) {
  return names.reduce((acc, curVal, i, arr) => {
    if (i === 0) {
      acc += curVal.name;
    } else if (i === arr.length - 1) {
      acc += " & " + curVal.name;
    } else {
      acc += ", " + curVal.name;
    }
    return acc;
  }, "");
}

console.log(list([]));
console.log(list([{ name: "Bart" }]));
console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
  ])
);
