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