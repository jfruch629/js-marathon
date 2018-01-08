Rocket = require('./Rocket')

class Spaceship {
  constructor(name, crew = [], propulsion = null, mountPropulsion) {
    this.name = name;
    this.crew = crew;
    this.propulsion = propulsion;

  }

  loadCrew(createdCrew) {
    let message = ""
    for(i = 0, len = createdCrew.length; i < len; i++) {
      message += 'Welcome Aboard, ' + createdCrew[i] + '!\n'
    }
    return message;
  }

  captain(crew) {
    let number = 2;
    let randomNumber = Math.floor(Math.random() * 5)
    return crew[randomNumber] + ', Captain.';
  }

  mountPropulsion() {
    let randomNumber = Math.floor(Math.random() * 5);
    this.propulsion = new Rocket(randomNumber);
    return "Propulsion mounted!"
  }

  takeoff() {
    if (this.propulsion.fuel != 0) {
      message = this.propulsion.fire() + "\nPPPPPPPPSSHWWWWRRRRSHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH"
    } else {
      message = "Rockets failed to fire.\nFuel: " + this.propulsion.fuel;
    }
    return message;
  }
}

module.exports = Spaceship;
