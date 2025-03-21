function findUpper(str:string):string{
    let word = str.toLowerCase().split(' ')
    for (let i=0; i<word.length; i++){
        word[i] = word[i][0].toUpperCase() + word[i].slice(1)
    }
    return word.join('');
}
console.log(findUpper("Find the fINder"))