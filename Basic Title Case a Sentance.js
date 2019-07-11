/*[Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.]*/

function titleCase(str) {
    
    var strToLowerCase = str.toLowerCase();
    var array = strToLowerCase.split('');
    var regex = /\s/g;
    var saveEspaceIndex = [];
    var removeLetter = "";
    var characterToUpper = "";
    
// We: catch all espace's index, removeLetter after it, make the characterToUpperCase and change the original character by the upper's one. 
    
    for (var i = 0; array.length > i; i++) {

        if (regex.test(array[i])) {

            saveEspaceIndex.push(i);
            removeLetter = str[i + 1];
            characterToUpper = removeLetter.toUpperCase();
            array.splice((i + 1), 1, characterToUpper);

        }

    }

    // Here, for the first letter as there is no space before and it was toLowerCase due to my line 3 . 
    if (array[0]) {
        removeLetter = array[0];
        characterToUpper = removeLetter.toUpperCase();
        array.splice(0, 1, characterToUpper)
    }

console.log(array.join(""));
    return array.join("");
}

titleCase("I'm a little tea pot"); //should return I'm A Little Tea Pot.

titleCase("sHoRt AnD sToUt"); //should return Short And Stout.

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return Here Is My Handle Here Is My Spout.


