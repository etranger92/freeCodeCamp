/***[Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay". If a word begins with a vowel you just add "way" to the end. Input strings are guaranteed to be English words in all lowercase.]***/

function translatePigLatin(str) {


    var regex = /[aeiou]/;

    if (regex.test(str) === false) { //If there is no vowels

        return str + "ay";

    } else {

        // I spot the vowel's index as reference to: extract and delete.
        var indexOfFirstVowel = str.match(regex).index; //place of the first vowel into my string
        var strToArray = str.split('');
        var characterLifted = [];
        var result;

        if (indexOfFirstVowel === 0) { //meaning a vowel is the first character of the string
            return str + "way";
          
        } else { // we will then remove the first characters before my first vowel and add it as asked.

            characterLifted = strToArray.slice(0, indexOfFirstVowel);

            strToArray.splice(0, indexOfFirstVowel);

            characterLifted.forEach(a => strToArray.push(a));

            result = strToArray.join('') + "ay";


            return result
        }
    }
}

console.log(translatePigLatin("oncentant"));