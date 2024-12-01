// https://adventofcode.com/2024/day/1

/**
 * 
    For example:

    3   4
    4   3
    2   5
    1   3
    3   9
    3   3
    For these example lists, here is the process of finding the similarity score:

    The first number in the left list is 3. It appears in the right list three times, so the similarity score increases by 3 * 3 = 9.
    The second number in the left list is 4. It appears in the right list once, so the similarity score increases by 4 * 1 = 4.
    The third number in the left list is 2. It does not appear in the right list, so the similarity score does not increase (2 * 0 = 0).
    The fourth number, 1, also does not appear in the right list.
    The fifth number, 3, appears in the right list three times; the similarity score increases by 9.
    The last number, 3, appears in the right list three times; the similarity score again increases by 9.
    So, for these example lists, the similarity score at the end of this process is 31 (9 + 4 + 0 + 0 + 9 + 9).
 */


async function fetchData (url) {

    const data = await fetch(url);
    const text = await data.text();
    const arr = text?.trim().split(/\s+/);

    let list1 = [];
    let list2 = [];

    arr.forEach((item, index)=> {
        if(index % 2 === 0){
            list1.push(item);
        }
        else {
            list2.push(item);
        }
    });

    console.log(list1.sort());
    console.log(list2.sort());
    
    let sumOfSimilarity = 0;
    let diffMapper = {};
    let loopIndex = 0;

    for(let i=0; i<list1.length; i++) {
        let similarityCount = 0;
        if(diffMapper[list1[i]] === undefined) {
           for(let j=loopIndex; j<list1.length; j++) {
                if(list1[i] === list2[j]) {
                    similarityCount++;
                }
                else if(list1[i] < list2[j]) {
                    loopIndex = j;
                    break;
                }
            } 
        }
        else {
            similarityCount = diffMapper[list1[i]];
        }
        
        diffMapper[list1[i]] = similarityCount;
        sumOfSimilarity += (similarityCount * list1[i]);
    }

    console.log(sumOfSimilarity);
}

fetchData('https://adventofcode.com/2024/day/1/input')
