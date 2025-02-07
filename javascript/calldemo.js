let person = {
    name1:"Meer Afzal"
}
function findName(){
    console.log(`my name is ${this.name1}`)
}

findName.call(person)