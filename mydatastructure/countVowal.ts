function countVowel(str:string):string{
const formattedStr = str.toLowerCase();
let count:number = 0;
for(let i=0; i<formattedStr.length; i++){
    const char = formattedStr[i];
    if(char === 'a' ||char === 'e' ||char === 'i' ||char === 'o' ||char === 'u'){
            count++;
    }
}
return formattedStr + " " +count;
}
function removeDuplicate(arr:string []):number{
    let uniqueArr:number[] = [];
    for(let i=0; i<arr.length; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}
console.log(countVowel('find the god'))