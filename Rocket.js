class Rocket {
  constructor(fuel = 0) {
    this.fuel = fuel;
  }

  addFuel(amount) {
    if (amount.isInteger()) {
      this.fuel += amount;
    }
    console.log(fuel);
  }

  fire() {
    if (this.fuel == 0) {
      message = "Engines failed to fire. Low on fuel."
    } else {
      this.fuel -= 1;
      message = "Rocket has been fired\nAfter firing up Fuel: " + this.fuel
    }
    return message;
  }
}

module.exports = Rocket;
