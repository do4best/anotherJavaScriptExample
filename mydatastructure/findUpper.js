function findUpper(str) {
    var word = str.toLowerCase().split(' ');
    for (var i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    }
    return word.join(' ');
}
console.log(findUpper("Find the fINder"));
