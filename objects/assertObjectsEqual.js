const eqObjects = function(object1, object2) {
  if (object1 === object2) { // how do I refeer to two values?
    console.log("TRUE");
  } else {
    console.log("A BIG FAT FALSE");
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(object1)} !== ${inspect(object2)}`);
  }
  result inspect
};


console.log(`Example label: ${inspect(object1)}`);