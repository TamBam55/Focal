var input = process.argv[2];
console.log(input)
if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join('');
}

//unable to get this to node? No errors, but no out