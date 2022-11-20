findWaldo = (names, found) => {
  names.forEach((item, index) => {
    if (item === "Waldo") {
      found(index); // execute callback
    }
  });
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], index => {
  console.log("Found Waldo at index",  index);
});