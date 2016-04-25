class Luck {
  constructor() {
    this.lucky = 42;
  }
}

class LuckGenerator extends Luck {
  getLucky() {
    console.warn('Your "lucky" number is: ', this.lucky);
  }
}

export default LuckGenerator;

// export { Luck, LuckGenerator };
