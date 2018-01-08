crewNames = ["Matt", "Dan", "Ben", "Scarlett", "Christian", "Mike"];
Spaceship = require('./Spaceship')
CrewMember = require('./CrewMember')
Rocket = require('./Rocket')

let launchpad = (ship) => {
  message  = 'Preflight procedures initiated for: ' + ship.name + '\n' +  ourShip.captain(crewNames);
  return message;
}

let trainCrew = (crew) => {
  crewObjectArray = []
  crewMessage = "|======= Crew =======|\n"
  for(i = 0, len = crew.length; i < len; i++) {
    addCrewMember = new CrewMember(crew[i], true);
    crewObjectArray.push(addCrewMember);
    crewMessage += "Name: " + addCrewMember.name + "    trained: " + addCrewMember.trained + '\n';
  }
   return crewMessage;
}

ourShip = new Spaceship('The Round1');
console.log(launchpad(ourShip));
console.log(trainCrew(crewNames));
console.log(ourShip.loadCrew(crewNames));
console.log(ourShip.mountPropulsion());
console.log(ourShip.takeoff(ourShip.rocket));
