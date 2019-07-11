/*[Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.]*/

function smallestCommons(arr) {
    
    arr.sort((a, b) => a - b);
    
    var firstElem = arr[0];
    var secondElem = arr[1];

    var arrayFirstResult = [];
    var arraySecondResult = [];
    var i = 0;
    var indexOfTheResult;

    do {

        firstElem += arr[0];
        arrayFirstResult.push(firstElem);

        secondElem += arr[1];
        
        arraySecondResult.push(secondElem);

        indexOfTheResult = arraySecondResult.indexOf(arrayFirstResult[arrayFirstResult.length - 1]);

    } while (indexOfTheResult === -1);

    return arrayFirstResult[arrayFirstResult.length - 1];
}


smallestCommons([1,3]);
smallestCommons([3,4]);





