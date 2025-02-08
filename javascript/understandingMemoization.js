function addMemo(){
        let cache = {};
        return (value)=>{
            if(value in cache){
      
                return cache[value]
            }else{
             
                let result = value + 20;
                cache[value] = result;
                return result;
            }
        }
   
    }
    let addit = addMemo()
    console.log(addit(23))
    console.log(addit(20))

    function findthememo(){
        let cache={};
        return (value)=>{
            if(value in cache){
                return cache[value]
            }else{
                let result = value + 30;
                cache[value] = result
                return result
            }
        }
    }
    let findMemo = findthememo();
    console.log(findMemo(90));