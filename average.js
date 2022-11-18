function average(list) {
  let sum = 0;

  for (let num of list) {
    sum += num;
  }
  return sum / list.length;
}

console.log(average([3, 5, 7]));

/*doesn't show anymore errors (but I tried eslint for fun and is showing a func error.. .which meants to me that it doesn't like that there no const variable set to the function (Right?))*/