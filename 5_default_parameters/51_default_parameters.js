function getLucky(x, y) {
  var x = x || 2;
  var y = y || 21;

  return x * y;
}
console.warn(getLucky());

/*

function getLucky(x = 2, y = 21) {
  return x * y;
}
console.warn(getLucky());

// > 42

*/
