// --- Day 3: Perfectly Spherical Houses in a Vacuum ---

// --- Part One ---
// Santa is delivering presents to an infinite two-dimensional grid of houses.
// He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next.
// Moves are always exactly one house to the north (^), south (v), east (>), or west (<).
// After each move, he delivers another present to the house at his new location.
// However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once.

// How many houses receive at least one present?

// For example:
// > delivers presents to 2 houses: one at the starting location, and one to the east.
// ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
// ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.

// INPUT
const input3 = require('./inputs.js');

const moveEast = '>';
const moveWest = '<';
const moveNorth = '^';
const moveSouth = 'v';
const startingHouse = [0, 0];

let currentHouse = startingHouse;
let housesVisitedMultipleTimes = ['0,0'];
let visitedHouses = [];

// PART 1
function getAllHouses(directions) {
  const parsedDirections = directions.split('');
  let houseToGo;

  parsedDirections.map((direction) => {
    if (direction === moveEast) {
      houseToGo = [currentHouse[0] + 1, currentHouse[1]];
    }
    if (direction === moveWest) {
      houseToGo = [currentHouse[0] - 1, currentHouse[1]];
    }
    if (direction === moveNorth) {
      houseToGo = [currentHouse[0], currentHouse[1] + 1];
    }
    if (direction === moveSouth) {
      houseToGo = [currentHouse[0], currentHouse[1] - 1];
    }
    const houseToString = houseToGo.toString();

    visitedHouses.push(houseToString);
    if (!housesVisitedMultipleTimes.includes(houseToString)) {
      housesVisitedMultipleTimes.push(houseToString);
    }
    currentHouse = houseToGo;
  });
  return console.log(
    'Santa visited',
    housesVisitedMultipleTimes.length,
    'houses more than once'
  );
}

getAllHouses(input3); // 2592 -- CORRECT!

// PART 2
let housesVisitedMultipleTimesByBoth = ['0,0'];
const startingHouseBoth = [0, 0];
let currentHouseSanta = startingHouseBoth;
let currentHouseRobot = startingHouseBoth;
let visitedHousesBoth = [];

function getAllHousesWithRobotSanta(directions) {
  const parsedDirections = directions.split('');
  let houseToGoSanta;
  let houseToGoRobot;

  // Santa
  for (let i = 0; i < parsedDirections.length - 1; i += 2) {
    if (parsedDirections[i] === moveEast) {
      houseToGoSanta = [currentHouseSanta[0] + 1, currentHouseSanta[1]];
    }
    if (parsedDirections[i] === moveWest) {
      houseToGoSanta = [currentHouseSanta[0] - 1, currentHouseSanta[1]];
    }
    if (parsedDirections[i] === moveNorth) {
      houseToGoSanta = [currentHouseSanta[0], currentHouseSanta[1] + 1];
    }
    if (parsedDirections[i] === moveSouth) {
      houseToGoSanta = [currentHouseSanta[0], currentHouseSanta[1] - 1];
    }
    const houseToGoSantaString = houseToGoSanta.toString();
    visitedHousesBoth.push(houseToGoSantaString);
    if (!housesVisitedMultipleTimesByBoth.includes(houseToGoSantaString)) {
      housesVisitedMultipleTimesByBoth.push(houseToGoSantaString);
    }
    currentHouseSanta = houseToGoSanta;
  }

  // Robosanta
  for (let i = 1; i < parsedDirections.length - 1; i += 2) {
    if (parsedDirections[i] === moveEast) {
      houseToGoRobot = [currentHouseRobot[0] + 1, currentHouseRobot[1]];
    }
    if (parsedDirections[i] === moveWest) {
      houseToGoRobot = [currentHouseRobot[0] - 1, currentHouseRobot[1]];
    }
    if (parsedDirections[i] === moveNorth) {
      houseToGoRobot = [currentHouseRobot[0], currentHouseRobot[1] + 1];
    }
    if (parsedDirections[i] === moveSouth) {
      houseToGoRobot = [currentHouseRobot[0], currentHouseRobot[1] - 1];
    }
    const houseToGoRobotString = houseToGoRobot.toString();
    visitedHousesBoth.push(houseToGoRobotString);

    if (!housesVisitedMultipleTimesByBoth.includes(houseToGoRobotString)) {
      housesVisitedMultipleTimesByBoth.push(houseToGoRobotString);
    }
    currentHouseRobot = houseToGoRobot;
  }
  return console.log(
    'Santa & Robosanta visited',
    housesVisitedMultipleTimesByBoth.length,
    'houses more than once.'
  );
}

getAllHousesWithRobotSanta(input3); // 2360 -- CORRECT!
