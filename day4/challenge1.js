/**
 * 
 
  As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt; she'd like to know if you could help her with her word search (your puzzle input). She only has to find one word: XMAS.

  This word search allows words to be horizontal, vertical, diagonal, written backwards, or even overlapping other words. It's a little unusual, though, as you don't merely need to find one instance of XMAS - you need to find all of them. Here are a few ways XMAS might appear, where irrelevant characters have been replaced with .:
  
  ..X...
  .SAMX.
  .A..A.
  XMAS.S
  .X....
  
  The actual word search will be full of letters instead. For example:
  
  MMMSXXMASM
  MSAMXMSMSA
  AMXSXMAAMM
  MSAMASMSMX
  XMASAMXAMM
  XXAMMXXAMA
  SMSMSASXSS
  SAXAMASAAA
  MAMMMXMMMM
  MXMXAXMASX
  
  In this word search, XMAS occurs a total of 18 times; here's the same word search again, but where letters not involved in any XMAS have been replaced with .:
  
  ....XXMAS.
  .SAMXMS...
  ...S..A...
  ..A.A.MS.X
  XMASAMX.MM
  X.....XA.A
  S.S.S.S.SS
  .A.A.A.A.A
  ..M.M.M.MM
  .X.X.XMASX


*/  

// this import not part of original code. since the input is based on login, instead fetching the data from local input file for easy execution
import text from './input.js';

function checkVertical(item, arr, index, count)  {
  for(let i=0; i<item.length; i++) {
    if(arr[index+1] && arr[index+2] && arr[index+3]) {
      if(`${item[i]}${arr[index+1][i]}${arr[index+2][i]}${arr[index+3][i]}` === 'XMAS' || `${item[i]}${arr[index+1][i]}${arr[index+2][i]}${arr[index+3][i]}` === 'SAMX') {
        count++;
      }
    }
  }
  return count;
}

function checkRightDiagonal(item, arr, index, count) {
  for(let i=0; i<item.length; i++) {
    if(arr[index+1] && arr[index+2] && arr[index+3]) {
      if(`${item[i]}${arr[index+1][i+1]}${arr[index+2][i+2]}${arr[index+3][i+3]}` === 'XMAS' || `${item[i]}${arr[index+1][i+1]}${arr[index+2][i+2]}${arr[index+3][i+3]}` === 'SAMX') {
        count++;
      }
    }
  }
  return count;
}

function checkLeftDiagonal(item, arr, index, count) {
  for(let i=0; i<item.length; i++) {
    if(arr[index+1] && arr[index+2] && arr[index+3]) {
      if(`${item[i]}${arr[index+1][i-1]}${arr[index+2][i-2]}${arr[index+3][i-3]}` === 'XMAS' || `${item[i]}${arr[index+1][i-1]}${arr[index+2][i-2]}${arr[index+3][i-3]}` === 'SAMX') {
        count++;
        console.log(`${item[i]}${arr[index+1][i-1]}${arr[index+2][i-2]}${arr[index+3][i-3]}`, count);
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
      const forward = item.match(/(XMAS)/ig);
      forward && (count += forward.length);
    	const backward = item.match(/(SAMX)/ig);
      backward && (count += backward.length)

      count = checkVertical(item, arr, index, count);
      count = checkRightDiagonal(item, arr, index, count);
      count = checkLeftDiagonal(item, arr, index, count);   
  });
  
  console.log(count);
}

// Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
// fetchData('https://adventofcode.com/2024/day/4/input');
fetchData();
