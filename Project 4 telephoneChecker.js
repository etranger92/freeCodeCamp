/*[Return true if the passed string looks like a valid US phone number.]*/

function telephoneCheck(str) {
    // Good luck!

    var strToArray = str.split('');
    var regexNumber = /\d/;
    var numberOfDigital = 0;
    var characterSpecial = [];
    var regexFormOfNumberCheck = /^1(\s\d{3}(?![)])|\s\(5{3}\)|\(5{3}\))|^5{3}(?![)])|^\(5{3}}|^[(]5{3}[)]5{3}/g; 
    var regexPunctuation = /[.,\/#!$%\^&\*;:{}=\_`~]/g;

    strToArray.forEach(item => regexNumber.test(item) ? numberOfDigital += 1 : false);

    if (numberOfDigital > 9 && numberOfDigital < 12) {

        if (regexFormOfNumberCheck.test(str) && !regexPunctuation.test(str)) {

            return true
        }
    }

    return false;
}
/*
telephoneCheck("555-555-5555") //should return a boolean.
Passed
telephoneCheck("1 555-555-5555") //should return true.
Passed
telephoneCheck("1 (555) 555-5555") //should return true.
Passed
telephoneCheck("5555555555") //should return true.
Passed
telephoneCheck("555-555-5555") //should return true.
Passed
telephoneCheck("(555)555-5555") //should return true.
Passed
telephoneCheck("1(555)555-5555") //should return true.
Passed
telephoneCheck("555-5555") //should return false.
Passed
telephoneCheck("5555555") //should return false.
Passed
telephoneCheck("1 555)555-5555") //should return false.
Passed
telephoneCheck("1 555 555 5555") //should return true.
Passed
telephoneCheck("1 456 789 4444") //should return true.
Passed
telephoneCheck("123**&!!asdf#") //should return false.
Passed
telephoneCheck("55555555") //should return false.
Passed
telephoneCheck("(6054756961)") //should return false
Passed
telephoneCheck("2 (757) 622-7382") //should return false.
Passed
telephoneCheck("0 (757) 622-7382")// should return false.
Passed
telephoneCheck("-1 (757) 622-7382") //should return false
Passed
telephoneCheck("2 757 622-7382") //should return false.
Passed
telephoneCheck("10 (757) 622-7382") //should return false.
Passed
telephoneCheck("27576227382") //should return false.
Passed
telephoneCheck("(275)76227382") //should return false.
Passed
telephoneCheck("2(757)6227382")// should return false.
Passed
telephoneCheck("2(757)622-7382") //should return false.
Passed
telephoneCheck("555)-555-5555") //should return false.
Passed
telephoneCheck("(555-555-5555") //should return false.
Passed
telephoneCheck("(555)5(55?)-5555") //should return false.*/