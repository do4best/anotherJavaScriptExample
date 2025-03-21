function characterCounter(sentence, count) {
    return sentence.split(count).length - 1;
}
var result = characterCounter("This is strange", 's');
console.log(result);
