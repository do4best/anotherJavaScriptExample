    function addMemo(){
        let cashe = {};
        return (value)=>{
            if(value in cashe){
                console.log("Fetching from cashe");
                return cashe[value]
            }else{
                console.log("Calculating result")
                let result = value + 20;
                cashe[value] = result;
                return result;
            }
        }
    }
    let addit = addMemo()
    console.log(addit(20))
    console.log(addit(20))
