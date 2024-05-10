// --- Day 4: The Ideal Stocking Stuffer ---
// Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the economically forward-thinking little girls and boys.

// To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.

// For example:

// If your secret key is abcdef, the answer is 609043, because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.
// If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....

const crypto = require('crypto');

const secretKey = 'yzbqklnj';
let i = 0;

function getHash(key) {
  return crypto.createHash('md5').update(key).digest('hex');
}

// 1. generator of the hash secretKey + increment of startingSuffix
function findTheOne(i) {
  let key = secretKey + i;
  let newHash = getHash(key);
  if (newHash.startsWith('000000', 0)) {
    console.log(i);
    return true;
  } else {
    return false;
  }
}

// 2. do while loop running getHash funcition that breaks on 00000/000000
do {
  i = i + 1;
} while (!findTheOne(i));

// PART 1 (5 zeros) - 282749 -- CORRECT!
// PART 2 (6 zeros) - 9962624 -- CORRECT!
