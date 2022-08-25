function translate(str) {

  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let newStr = "";

  

  if (vowels.indexOf(str[0]) > -1) {
    newStr = str + "way";
    return newStr;
} else {
    let firstMatch = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(firstMatch[0]);
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
    // newStr.toLowerCase(); Couldn't get to work 
    return newStr;
    
}

}



module.exports.translate = translate;