/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...
const joinList = function(conceptList) {
  let newArr = ""; 
  for (let i = 0; i < conceptList.length; i++) {
    const word = conceptList[i];
    console.log(i, conceptList.length);
    if (i === conceptList.length - 1) {
      newArr += conceptList[i];
    } else {
      newArr += conceptList[i] + ", ";
    }
  }
  return newArr;
};
// I can't get the commas to work.

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

