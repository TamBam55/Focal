function diceRoll(min, max) {
  return 1 + Math.floor(Math.random() * 6);
}
console.log(diceRoll(1, 6))



//*I wasn't able to find a way to do Math.floor with .random... but found ~~ option in StackOverflow and it worked? I can't find out why either?*/