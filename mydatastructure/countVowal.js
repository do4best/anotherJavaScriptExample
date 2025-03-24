function countVowel(str) {
    var formattedStr = str.toLowerCase();
    var count = 0;
    for (var i = 0; i < formattedStr.length; i++) {
        var char = formattedStr[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return formattedStr + " " + count;
}
console.log(countVowel('find the god'));
