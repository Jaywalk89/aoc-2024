/**
 * 
 
  Looking for the instructions, you flip over the word search to find that this isn't actually an XMAS puzzle; it's an X-MAS puzzle in which you're supposed to find two MAS in the shape of an X. One way to achieve that is like this:

  M.S
  .A.
  M.S
  
  Irrelevant characters have again been replaced with . in the above diagram. Within the X, each MAS can be written forwards or backwards.
  
  Here's the same example from before, but this time all of the X-MASes have been kept instead:
  
  .M.S......
  ..A..MSMS.
  .M.S.MAA..
  ..A.ASMSM.
  .M.S.M....
  ..........
  S.S.S.S.S.
  .A.A.A.A..
  M.M.M.M.M.
  ..........
  
  In this example, an X-MAS appears 9 times.


*/  

// this import not part of original code. since the input is based on login, instead fetching the data from local input file for easy execution
import text from './input.js';

function checkRightDiagonal(item, arr, index) {
  let positionAlist = [];
  for(let i=0; i<item.length; i++) {
    if(arr[index+1] && arr[index+2]) {
      if(`${item[i]}${arr[index+1][i+1]}${arr[index+2][i+2]}` === 'MAS' || `${item[i]}${arr[index+1][i+1]}${arr[index+2][i+2]}` === 'SAM') {
        positionAlist.push(`${index+1}${i+1}`);
      }
    }
  }
  return positionAlist;
}

function checkLeftDiagonal(item, arr, index, positionAlist, count) {
  for(let i=0; i<item.length; i++) {
    if(arr[index+1] && arr[index+2]) {
      if(`${item[i]}${arr[index+1][i-1]}${arr[index+2][i-2]}` === 'MAS' || `${item[i]}${arr[index+1][i-1]}${arr[index+2][i-2]}` === 'SAM') {
        positionAlist.includes(`${index+1}${i-1}`) && count++;
      }
    }
  }
  return count;
}


async function fetchData(url) {
  // Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
  //const data = await fetch(url);
  //const text = await data.text();

  const arr = text?.trim().split(/\n/);
  let count = 0;
  
  arr.forEach((item, index) => {
    	let positionAlist = [];
      positionAlist = checkRightDiagonal(item, arr, index);
      count = checkLeftDiagonal(item, arr, index, positionAlist, count);
  });
  
  console.log(count);
}

// Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
// fetchData('https://adventofcode.com/2024/day/4/input');
fetchData();
