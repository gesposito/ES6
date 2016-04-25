console.warn(
  Math.max(21, 2, 2 * 21)
);

console.warn(
  Math.max.apply(null, [21, 2, 2 * 21])
);

/*

console.warn(
  Math.max(...[21, 2, 2 * 21])
);

// > 42

*/
