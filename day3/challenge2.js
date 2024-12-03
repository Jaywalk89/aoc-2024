/**
 * 
    As you scan through the corrupted memory, you notice that some of the conditional statements are also still intact. If you handle some of the uncorrupted conditional statements in the program, you might be able to get an even more accurate result.

    There are two new instructions you'll need to handle:
    
        The do() instruction enables future mul instructions.
        The don't() instruction disables future mul instructions.
    
    Only the most recent do() or don't() instruction applies. At the beginning of the program, mul instructions are enabled.
    
    For example:
    
    xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
    
    This corrupted memory is similar to the example from before, but this time the mul(5,5) and mul(11,8) instructions are disabled because there is a don't() instruction before them. The other mul instructions function normally, including the one at the end that gets re-enabled by a do() instruction.
    
    This time, the sum of the results is 48 (2*4 + 8*5).
 */

// this import not part of original code. since the input is based on login, instead fetching the data from local input file for easy execution
import text from './input.js';

async function fetchData(url) {

  // Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
  //const data = await fetch(url);
  //const text = await data.text();

  const arr = text?.trim().match(/(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/ig);
  

  let doCalculate = true;
  const sum = arr.reduce((accumlator, currentValue) => {
     if(currentValue === "don't()"){
      doCalculate = false;
      return accumlator + 0;
    }
    
    if(currentValue === "do()"){
      doCalculate = true;
      return accumlator + 0;
    }
    
    if(doCalculate) {
			const list = currentValue.match(/\d+/ig);
      const result = parseInt(list[0]) * parseInt(list[1]);
      return accumlator + result;
    }
		return accumlator + 0;
  }, 0)

  console.log(sum);
}


// Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
// fetchData('https://adventofcode.com/2024/day/1/input');
fetchData();
