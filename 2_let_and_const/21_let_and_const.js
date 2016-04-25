// Outer block-scope
var lucky = 24;

if (lucky !== 42) {
  // Inner block-scope
  var lucky = 42;
  console.warn(`no way, it's definitely ${lucky}`);
}

console.warn(lucky);

/*

// Outer block-scope
let lucky = 24;

if (lucky !== 42) {
// Inner block-scope
  let lucky = 42;
  console.warn(`no way, it's definitely ${lucky}`);
}

console.warn(lucky);

// > no way, it's definitely 42
// > 24

*/
