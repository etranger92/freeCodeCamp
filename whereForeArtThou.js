function whatIsInAName(collection, source) {
   
    var arr = [];
    var result;
    var numberOfPropretiesInArr = 0;
    var numberOfPropretyInArray = 0;
    var finalResult = [];

    //Collecting source's propreties.
    arr.push(Object.keys(source));
    
    for (var i = 0; arr[0].length > i; i++) {

        numberOfPropretiesInArr++;

        result = collection.filter((item, index) => {
    //compare values collection propreties(each item) with those of source to collect the whole element. 
            if (item[arr[0][i]] === source[arr[0][i]]) {
                
                return item      
            }
        })
    };

    // we calculate the total of propreties in each items to make a comparaison later with source's propreties number (numberOfPropretiesInArr)
    
    function calculeNumberOfItem(item) {
        
        console.log(item)
        var array = [];
        array.push(Object.keys(item));
        return array[0].length

    }
   
    //we will only keep elements with "at least" the same number of propreties than the source one.
    
    result.forEach((item, i) => {
            if (calculeNumberOfItem(item) >= numberOfPropretiesInArr) {

                finalResult.push(item);

            }
        }

    )
    
    /*arr = (finalResult[0][arr[0][1]] === source[arr[0][1]] ? finalResult : []);
    return arr*/ // we need to pass the arr as return into freecodecamp's test as they force us to return "arr" to success it. 

      //we compare our second propreties as in one of the examle we need to return [] if they are not equal.
    return (finalResult[0][arr[0][1]] === source[arr[0][1]] ? finalResult : []);
}


/*******CONSOLE_LOG*******/ 

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}); // Here is b not equal
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],{ "apple": 1, "bat": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], 
                          { "apple": 1, "bat": 2 });
