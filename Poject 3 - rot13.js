  /*[ One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.]*/
 
  
  
  function rot13(str) {

    var strToUpper = str.toUpperCase();
    var strToArray = strToUpper.split('');
    var alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var alphabetsToString = alphabets.join('');

    var ciphers = 13;
    var newArray = [];
    var newIndex;
    var resultString = "";

    //I make the check (includes()) of each elems of my strings. If it's true I return the new letter. If not I return the original element.
    for (var i = 0; strToArray.length > i; i++) {
        if (alphabetsToString.includes(strToArray[i])) {
            for (var j = 0; alphabets.length > j; j++) {

                if (strToArray[i] === alphabets[j]) {

                    newIndex = calculateIndexOfNewCharacter(j);
                    //2 strToArray.splice(i, 1, alphabets[newIndex]);
                    newArray.push(alphabets[newIndex]);

                    //console.log(strToArray.splice(i, 1, alphabets[calculateIndexOfNewCharacter(j)]), i)
                }
            }
        } else {

            newArray.push(strToArray[i])
        }
    }


    function calculateIndexOfNewCharacter(index) {
        var saveNum;
        if (ciphers > index) {
            return index + ciphers;

        } else if (index > ciphers) {
            saveNum = 26 - index;
            return ciphers - saveNum;

        } else {
            return 0
        }

    }
    resultString = newArray.join("");
    return resultString // 2 strToArray 

  }
console.log(rot13("SERR PBQR PNZC"));  // return free code camp
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));


