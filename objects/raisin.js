const raisinAlarm = function (cookie) {
  // loop thru the array
  if (cookie.includes("🍇")) {
    return "Raisin alert!"; f
  } else {
    return "All good!";
  }
};
//if - else
// return 


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log("--------------")


/*Raisin alert!
Raisin alert!
All good!*/

const raisinAlarmArray = function (cookies) {
  let alert = [];
  for (i = 0; i < cookies.length; i++)
    if (cookies[i].includes("🍇")) {
      alert.push("Raisin alert!"); 
    } else {
      alert.push("All good!");
    }
  return alert
}   


console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

//expected output
//["Raisin alert!", "Raisin alert!", "All good!"]