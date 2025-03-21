function characterCounter(sentence:string,count:string){
    return sentence.split(count).length-1
}

let result = characterCounter("This is strange",'s')
console.log(result)