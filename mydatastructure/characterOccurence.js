function countCharacter(find,char){
    // let result=0;
    // for(let i=0; i<find.length; i++){
    //     if(find[i] === char){
    //         result++
    //     }
    // }
    // return result;
    return find.split(char).length -1
}
let resultfinal = countCharacter('My name is not right','n')

console.log(resultfinal)