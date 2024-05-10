// --- Day 1: Not Quite Lisp ---

// --- Part One ---
// Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.
// An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.
// The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

// For example:
// (()) and ()() both result in floor 0.
// ((( and (()(()( both result in floor 3.
// ))((((( also results in floor 3.
// ()) and ))( both result in floor -1 (the first basement level).
// ))) and )())()) both result in floor -3.
// To what floor do the instructions take Santa?

// --- Part Two ---
// Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.
// For example:
// ) causes him to enter the basement at character position 1.
// ()()) causes him to enter the basement at character position 5.
// What is the position of the character that causes Santa to first enter the basement?

// INPUT

import input1 from './inputs';

// COMMANDS
const startingFloor = 0;
const goUp = '(';
const goDown = ')';
const basement = -1;

let position = 1;
let currentFloor = startingFloor;
let enteredBasement = false;

function findTheFloor(instructions) {
  let instructionSet = input1.split('');
  let instructionLength = instructionSet.length - 1;

  instructionSet.map((command, i) => {
    if (command === goUp) {
      currentFloor++;
    }

    if (command === goDown) {
      currentFloor--;
    }

    if (currentFloor === basement) {
      !enteredBasement &&
        console.log(
          'Instruction set where Santa enters the basement:',
          position
        ); // 1795 -- CORRECT!
      enteredBasement = true;
    }

    position++;
    return (
      i === instructionLength &&
      console.log('Floor to deliver the presents:', currentFloor)
    );
  });
}

findTheFloor(input1); // 74 -- CORRECT!