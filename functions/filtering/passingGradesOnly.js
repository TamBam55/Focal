const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passing = grades.filter(function(num) {
  return num >= 70;
});
console.log("This are the passing grades:", passing);
