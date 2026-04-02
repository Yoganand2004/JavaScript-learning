let Object1 = {
    "email": "ram.123@yahoo.com",
    "password": "123"
}
console.log(Object1)

//creating a shallow copy
let Object2 = {...Object1}
Object2.email ="sita.123@yahoo.com"
console.log("Object1" ,Object1)
console.log("Object2" ,Object2)

//string manupulation

let gameName = new String("Cricket")    //typeof -> Object of String

gameName = 'Football'   //typrof -> String

console.log(gameName)

console.log(gameName.substring(0,2))
console.log(gameName.slice(-5,-2)) // last two only neeglate

console.log(gameName.includes('Foo'))  //check if present or not Case Sencetive