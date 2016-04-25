console.warn(
  [21].map(function(n) {
    return n * 2;
  })
);

/*

// Shortest form has one parameter and returns implicitly, also binds `this`
console.warn([21].map(n => n * 2));

// > [42]

*/
