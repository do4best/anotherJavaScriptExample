function momoizewithClosure(fn){
    let cache = {};
    return function(...args){
        const key = args.join(",");
        if(key in cache){
            return cache[key];
            console.log("called")
        }
        const result = fn(...args)
        cache[key] = result;
        return result 
     
    };
}
const fibonacci = momoizewithClosure((n)=>{
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2)
})

console.log(fibonacci(13))

function mamoExample(fn){
    let cache = {};
    return function(...args){
        const key = args.join(",")
        if(key in cache){
            return cache[key]
        }
        const result = fn(...args)
        cache[key] = result;
        return result;
    }
}
function memoazationWithClosure(fn){
    let cache = {};
    return function(...args){
        const key = args.join(",")
        if(key in cache){
            return cache[key]
        }else{
            let result = fn(...args)
            cache[key] = result;
            return result;
        }
    }
}
let resultfinal = memoazationWithClosure((n)=>{
if(n <= 1) return n;
return resultfinal(n-1) + resultfinal(n-2)
})
console.log(resultfinal(90))