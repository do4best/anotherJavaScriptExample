function findMax(arr:number[],arr1?:number):number{
    return Math.max(...arr)
}

console.log(findMax([2,6,8,9,10]))

function findAnotherMax(arr:number[]):number{
    let counter = arr[0]
    for(let i=0; i<arr.length; i++){
        if(counter > arr[i]){
            counter = arr[i]
        }
        
    }
    return counter;
}
function reversString(str:string):string{
    return str.split('').reverse().join('')
}
