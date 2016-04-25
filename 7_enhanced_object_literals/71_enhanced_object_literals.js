const number = 42;

function getLucky() {
  return number;
}

const lucky = {
  number,
  getLucky,
  ['forty' + 'two']: number,
};

console.warn(lucky.number, lucky.getLucky(), lucky.fortytwo);

// > 42 42 42
