var luck = {
  lucky : 42,
  number: 42,
  fake  : 24,
};

var lucky = luck.lucky;
var number = luck.number;

console.warn(lucky, number);

/*

const {
  lucky,
  number
} = {
  lucky : 42,
  number: 42,
  fake  : 24,
};

console.warn(lucky, number);

// > 42, 42

*/
