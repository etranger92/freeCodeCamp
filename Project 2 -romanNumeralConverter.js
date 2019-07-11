/*[Convert the given number into a roman numeral]*/

function convertToRoman(num) {

    
    var onesRoman = ['', "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tensRoman = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var centRoman = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    var thousandRoman = ['', "M", "MM", "MMM", "MMMM", "MMMMM"];
    var numToRomanNumeral = "";
    var errorMessage = "Your entry is not a number or it is not within the range of : [1 - 5999]";
    
    

    //we need to calculate the unit, tenth, hundred and thousand of my number in order to match it with his romanFormArray
    var onesIs = num % 10;
    var tensIs = (num % 100 - onesIs) / 10;
    var hundredIs = (num % 1000 - num % 100) / 100;
    var thousandIs = (num % 10000 - num % 1000) / 1000;
    
//We check if the entry is a number and less than 6000.  Note: this is check is not required within the excerice though. 
    
if(!Number.isNaN(num) && 6000>num) {
    
    if (num > 0 && 10 > num) {
        numToRomanNumeral = onesRoman[onesIs]
    }
    if (num > 9 && 99 >= num) {
        numToRomanNumeral = tensRoman[tensIs] + onesRoman[onesIs]
    }
    if (num > 99 && 999 >= num) {
        numToRomanNumeral = centRoman[hundredIs] + tensRoman[tensIs] + onesRoman[onesIs]
    }
    if (num > 999) {
        numToRomanNumeral = thousandRoman[thousandIs] + centRoman[hundredIs] + tensRoman[tensIs] + onesRoman[onesIs]
    }
return numToRomanNumeral;
} 
    
    return errorMessage; 
   
}



console.log(convertToRoman(6001));    // message error
console.log(convertToRoman(3));    //should return "III".
console.log(convertToRoman(4));    // should return "IV".
console.log(convertToRoman(5));    //should return "V".
console.log(convertToRoman(9));    //should return "IX".
console.log(convertToRoman(12));   // should return "XII".
console.log(convertToRoman(16));   // should return "XVI".
console.log(convertToRoman(29));   //should return "XXIX".
console.log(convertToRoman(44));   // should return "XLIV".
console.log(convertToRoman(45));   // should return "XLV"
console.log(convertToRoman(68));   //should return "LXVIII"
console.log(convertToRoman(83));   // should return "LXXXIII"
console.log(convertToRoman(97));   //should return "XCVII"
console.log(convertToRoman(99));   //should return "XCIX"
console.log(convertToRoman(400));  // should return "CD"
console.log(convertToRoman(500));  // should return "D"
console.log(convertToRoman(501));  // should return "DI"
console.log(convertToRoman(649));  // should return "DCXLIX"
console.log(convertToRoman(798));  // should return "DCCXCVIII"
console.log(convertToRoman(891));  // should return "DCCCXCI"
console.log(convertToRoman(1000)); // should return "M"
console.log(convertToRoman(1004)); // should return "MIV"
console.log(convertToRoman(1006)); //should return "MVI"
console.log(convertToRoman(1023)); // should return "MXXIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); //should return "MMMCMXCIX"
