// --- Day 2: I Was Told There Would Be No Math ---

// --- Part One ---
// The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.
// Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side.
// For example:
// A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
// A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.
// All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?

// --- Part Two ---
// The elves are also running low on ribbon. Ribbon is all the same width, so they only have to worry about the length they need to order, which they would again like to be exact.

// The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present. Don't ask how they tie the bow, though; they'll never tell.

// For example:

// A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
// A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.
// How many total feet of ribbon should they order?

// INPUT
import input2 from './inputs';

let dimensions = [];

function getDimensions(dimensions) {
  let parsed = [];
  let splited = dimensions.split('x');
  splited.map((value) => {
    parsed.push(parseInt(value));
  });
  return parsed;
}

// PART 1
function getAreaOfPresent([l, w, h]) {
  const sideA = l * w;
  const sideB = w * h;
  const sideC = h * l;
  const area = sideA + sideB + sideC;
  const extraArea = Math.min(sideA, sideB, sideC);
  return 2 * area + extraArea;
}

function getAllWrappingPaper() {
  let totalWrappingPaperToOrder = 0;

  for (let i = 0; i < input2.length; i++) {
    dimensions.push(getDimensions(input2[i]));
    totalWrappingPaperToOrder =
      totalWrappingPaperToOrder + getAreaOfPresent(dimensions[i]);
  }
  return totalWrappingPaperToOrder;
}

console.log(
  'Total area of wrapping paper is',
  getAllWrappingPaper(),
  'square feet'
); // 1 598 415 feet -- CORRECT!

// PART 2
function getAllRibbonsLength() {
  let totalRibbonLength = 0;

  dimensions.map((packageDimensions) => {
    const total =
      getRibbonLength(packageDimensions) + getBowLength(packageDimensions);
    totalRibbonLength = totalRibbonLength + total;
  });

  return totalRibbonLength;
}

function getRibbonLength(dimensions) {
  const sorted = dimensions.sort(function (a, b) {
    return a - b;
  });

  return sorted[0] + sorted[0] + sorted[1] + sorted[1];
}

function getBowLength([l, w, h]) {
  return l * w * h;
}

console.log('Total length of ribbons is', getAllRibbonsLength(), 'feet'); // 3 812 909 feet -- CORRECT !
