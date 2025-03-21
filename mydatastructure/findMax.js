function findMax(arr, arr1) {
    return Math.max.apply(Math, arr);
}
function findAnother(arr){
    let result = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > result){
            result = arr[i]
        }
    }
    return result;
}
console.log(findMax([2, 6, 8, 9, 10]));
console.log(findAnother([2, 6, 8, 9, 13]));
