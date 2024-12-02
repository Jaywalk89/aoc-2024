/**
 * 
  For example:

    7 6 4 2 1
    1 2 7 8 9
    9 7 6 2 1
    1 3 2 4 5
    8 6 4 4 1
    1 3 6 7 9
    This example data contains six reports each containing five levels.

    The engineers are trying to figure out which reports are safe. The Red-Nosed reactor safety systems can only tolerate levels that are either gradually increasing or gradually decreasing. So, a report only counts as safe if both of the following are true:

    The levels are either all increasing or all decreasing.
    Any two adjacent levels differ by at least one and at most three.
    In the example above, the reports can be found safe or unsafe by checking those rules:

    7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
    1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
    9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
    1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
    8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
    1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
    So, in this example, 2 reports are safe.
 * 
 */

// this import not part of original code. since the input is based on login, instead fetching the data from local input file for easy execution
import text from './input.js';

async function fetchData (url) {

    // Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
    //const data = await fetch(url);
    //const text = await data.text();
    
    let arr = text?.trim().split(/\n+/);

    let safeCount = 0;
   
    arr.forEach((item, index) => {
        const newList = item?.trim().split(/\s+/).map((item1) => parseInt(item1, 10));
        let filter1 = [];
        let filter2 = [];
        
        const ascList = newList.toSorted((a, b) => a - b);
        filter1 = filterFn(ascList, newList);

        if(filter1.length > 0) {
            const descList = newList.toSorted((a, b) => b - a);
            filter2 = filterFn(descList, newList);
        }
        
        (!filter1.length || !filter2.length) && safeCount++;
    });

    console.log(safeCount);
}

const filterFn = (list, newList) => {
    return list.filter((item, index) => {
        if(item !== newList[index] || item === list[index+1] || Math.abs(item - list[index+1]) > 3) {
            return true;
        }
        return false;
    });
}

// Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
// fetchData('https://adventofcode.com/2024/day/1/input');
fetchData();