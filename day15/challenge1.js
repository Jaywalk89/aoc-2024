/**
 * 
 
  You look up to see a vast school of lanternfish swimming past you. On closer inspection, they seem quite anxious, so you drive your mini submarine over to see if you can help.

  Because lanternfish populations grow rapidly, they need a lot of food, and that food needs to be stored somewhere. That's why these lanternfish have built elaborate warehouse complexes operated by robots!
  
  These lanternfish seem so anxious because they have lost control of the robot that operates one of their most important warehouses! It is currently running amok, pushing around boxes in the warehouse with no regard for lanternfish logistics or lanternfish inventory management strategies.
  
  Right now, none of the lanternfish are brave enough to swim up to an unpredictable robot so they could shut it off. However, if you could anticipate the robot's movements, maybe they could find a safe option.
  
  The lanternfish already have a map of the warehouse and a list of movements the robot will attempt to make (your puzzle input). The problem is that the movements will sometimes fail as boxes are shifted around, making the actual movements of the robot difficult to predict.
  
  For example:
  
  ##########
  #..O..O.O#
  #......O.#
  #.OO..O.O#
  #..O@..O.#
  #O#..O...#
  #O..O..O.#
  #.OO.O.OO#
  #....O...#
  ##########
  
  <vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^
  vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v
  ><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<
  <<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^
  ^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><
  ^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^
  >^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^
  <><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>
  ^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>
  v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^
  As the robot (@) attempts to move, if there are any boxes (O) in the way, the robot will also attempt to push those boxes. However, if this action would cause the robot or a box to move into a wall (#), nothing moves instead, including the robot. The initial positions of these are shown on the map at the top of the document the lanternfish gave you.
  
  The rest of the document describes the moves (^ for up, v for down, < for left, > for right) that the robot will attempt to make, in order. (The moves form a single giant sequence; they are broken into multiple lines just to make copy-pasting easier. Newlines within the move sequence should be ignored.)
  
  Here is a smaller example to get started:
  
  ########
  #..O.O.#
  ##@.O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########
  
  <^^>>>vv<v>>v<<
  Were the robot to attempt the given sequence of moves, it would push around the boxes as follows:
  
  Initial state:
  ########
  #..O.O.#
  ##@.O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########
  
  Move <:
  ########
  #..O.O.#
  ##@.O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########
  
  Move ^:
  ########
  #.@O.O.#
  ##..O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########
  
  Move ^:
  ########
  #.@O.O.#
  ##..O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########
  
  Move >:
  ########
  #..@OO.#
  ##..O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########
  
  Move >:
  ########
  #...@OO#
  ##..O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########
  
  Move >:
  ########
  #...@OO#
  ##..O..#
  #...O..#
  #.#.O..#
  #...O..#
  #......#
  ########
  
  Move v:
  ########
  #....OO#
  ##..@..#
  #...O..#
  #.#.O..#
  #...O..#
  #...O..#
  ########
  
  Move v:
  ########
  #....OO#
  ##..@..#
  #...O..#
  #.#.O..#
  #...O..#
  #...O..#
  ########
  
  Move <:
  ########
  #....OO#
  ##.@...#
  #...O..#
  #.#.O..#
  #...O..#
  #...O..#
  ########
  
  Move v:
  ########
  #....OO#
  ##.....#
  #..@O..#
  #.#.O..#
  #...O..#
  #...O..#
  ########
  
  Move >:
  ########
  #....OO#
  ##.....#
  #...@O.#
  #.#.O..#
  #...O..#
  #...O..#
  ########
  
  Move >:
  ########
  #....OO#
  ##.....#
  #....@O#
  #.#.O..#
  #...O..#
  #...O..#
  ########
  
  Move v:
  ########
  #....OO#
  ##.....#
  #.....O#
  #.#.O@.#
  #...O..#
  #...O..#
  ########
  
  Move <:
  ########
  #....OO#
  ##.....#
  #.....O#
  #.#O@..#
  #...O..#
  #...O..#
  ########
  
  Move <:
  ########
  #....OO#
  ##.....#
  #.....O#
  #.#O@..#
  #...O..#
  #...O..#
  ########
  The larger example has many more moves; after the robot has finished those moves, the warehouse would look like this:
  
  ##########
  #.O.O.OOO#
  #........#
  #OO......#
  #OO@.....#
  #O#.....O#
  #O.....OO#
  #O.....OO#
  #OO....OO#
  ##########
  The lanternfish use their own custom Goods Positioning System (GPS for short) to track the locations of the boxes. The GPS coordinate of a box is equal to 100 times its distance from the top edge of the map plus its distance from the left edge of the map. (This process does not stop at wall tiles; measure all the way to the edges of the map.)
  
  So, the box shown below has a distance of 1 from the top edge of the map and 4 from the left edge of the map, resulting in a GPS coordinate of 100 * 1 + 4 = 104.
  
  #######
  #...O..
  #......
  The lanternfish would like to know the sum of all boxes' GPS coordinates after the robot finishes moving. In the larger example, the sum of all boxes' GPS coordinates is 10092. In the smaller example, the sum is 2028.
  
  Predict the motion of the robot and boxes in the warehouse. After the robot is finished moving, what is the sum of all boxes' GPS coordinates?


*/  

// this import not part of original code. since the input is based on login, instead fetching the data from local input file for easy execution
import text from './input.js';

function getNewIndexes(direction, newIndex1, newIndex2) {
    if(direction === '^') {
        newIndex1 = newIndex1 - 1;
    } else if(direction === '>') {
        newIndex2 = newIndex2 + 1;
    } else if(direction === 'v') {
        newIndex1 = newIndex1 + 1;
    } else if(direction === '<') {
        newIndex2 = newIndex2 - 1;
    }
    return [newIndex1, newIndex2];
}

function moveBoxes(direction, warehouse) {
    let  [ newIndex1, newIndex2 ] = getNewIndexes(direction, index1, index2);

    if(warehouse[newIndex1][newIndex2] === '.'){
        let newList = warehouse[index1].split('');
        newList[index2] = '.';
        warehouse[index1] = newList.join('');
        
        let newList2 = warehouse[newIndex1].split('');
        newList2[newIndex2] = '@';
        warehouse[newIndex1] = newList2.join('');
        
        index1 = newIndex1;
        index2 = newIndex2;
    }
    else if(warehouse[newIndex1][newIndex2] === 'O') {
        const [ indx1, indx2 ] = findNext(warehouse, direction, newIndex1, newIndex2);
        if(indx1) {
            let newList = warehouse[index1].split('');
            newList[index2] = '.';
            warehouse[index1] = newList.join('');
            
            let newList2 = warehouse[newIndex1].split('');
            newList2[newIndex2] = '@';
            warehouse[newIndex1] = newList2.join('');
            
            let newList3 = warehouse[indx1].split('');
            newList3[indx2] = 'O';
            warehouse[indx1] = newList3.join('');
            
            index1 = newIndex1;
            index2 = newIndex2;
        }
    }
}

function findNext(warehouse, direction, indx1, indx2) {
    let retunValue = [];
    if(warehouse[indx1][indx2] === 'O') {
        let [ newIndex1, newIndex2 ] = getNewIndexes(direction, indx1, indx2);
        retunValue = findNext(warehouse, direction, newIndex1, newIndex2);
    }
    else if(warehouse[indx1][indx2] === '.') {
        retunValue = [indx1, indx2];
    }
    return retunValue;
}

let index1 = -1;
let index2 = -1;

async function fetchData (url) {
    // Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
    //const data = await fetch(url);
    //const text = await data.text();
    
    let arr = text?.trim().split(/\s\n/);
    let warehouse = arr[0].split(/\n/);
    let moves = arr[1];

    for(let i=1; i < warehouse.length - 1; i++) {
       const position = warehouse[i].indexOf('@');
        if(position > -1) {
            index1 = i;
            index2 = position;
            break;
        }
    };

    for(let i=0; i < moves.length; i++) {
        moveBoxes(moves[i], warehouse);
    };

    let sum = 0;
    for(let i=1; i < warehouse.length - 1; i++) {
       warehouse[i].split('').forEach((item, index) => {
           if(item === 'O') {
                sum += 100 * i + index;
           }
       }, 0);
    };

    console.log(sum);
}

// Original code to fetch the input. since the input is based on login, commented it and instead fetching the data from local input file for easy execution
// fetchData('https://adventofcode.com/2024/day/15/input');
fetchData();
