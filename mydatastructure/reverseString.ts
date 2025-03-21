function reverseString(str:string):string{
    return str.split('').reverse().join('')
}
function anotherReverse(str:string):string{
    let result='';
    for(let i=str.length-1;  i>=0; i--){
        result += str[i] 
    }
    return result;
}
console.log(reverseString("Friend is here"))
console.log(anotherReverse("Find the God"))