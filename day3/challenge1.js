/**
 * 
 
  The computer appears to be trying to run a program, but its memory (your puzzle input) is corrupted. All of the instructions have been jumbled up!
  
  It seems like the goal of the program is just to multiply some numbers. It does that with instructions like mul(X,Y), where X and Y are each 1-3 digit numbers. For instance, mul(44,46) multiplies 44 by 46 to get a result of 2024. Similarly, mul(123,4) would multiply 123 by 4.
  
  However, because the program's memory has been corrupted, there are also many invalid characters that should be ignored, even if they look like part of a mul instruction. Sequences like mul(4*, mul(6,9!, ?(12,34), or mul ( 2 , 4 ) do nothing.
  
  For example, consider the following section of corrupted memory:
  
  xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
  
  Only the four highlighted sections are real mul instructions. Adding up the result of each instruction produces 161 (2*4 + 5*5 + 11*8 + 8*5).

*/  

// this import not part of original code. since the input is based on login, instead fetching the data from local input file for easy execution
import text from './input.js';

async function fetchData(url) {

  // Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
  //const data = await fetch(url);
  //const text = await data.text();

  const arr = text?.trim().match(/mul\(\d+,\d+\)/ig);

  const sum = arr.reduce((accumlator, currentValue) => {
    const list = currentValue.match(/\d+/ig);
    const result = parseInt(list[0]) * parseInt(list[1]);
    return accumlator + result;
  }, 0)

  console.log(sum);
}


// Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
// fetchData('https://adventofcode.com/2024/day/3/input');
fetchData();