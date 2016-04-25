"use strict";

[21].map(
  function(n) {
    var n2 = n * 2;

    console.warn(n2);
    return n2;
  }
);

/*

[21].map(
  (n) => {
    const n2 = n * 2;

    console.warn(n2);
    return n2;
  }
);

// > [42]

*/
