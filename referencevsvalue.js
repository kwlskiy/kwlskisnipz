const startArray = ["yes", "no"]

const myResult1 = reverse(startArray)
function reverse(s) {
    return [...s].reverse();
}
//here "startArray" is not reversed: ["yes", "no"], due to being copied and we have no side effects to "startArray"
console.log(startArray)

const myResult2 = reverseDeep(startArray)
function reverseDeep(s) {
    return s.reverse()
}
//here the value is actually reversed because we use the same reference: ["no", "yes"]
console.log(startArray)


//this happens because the parameter is passed by value and startArray is a "reference type" so it does not contain the actual values itself,
//it contains a reference to the memory where these values are stored
//so with reverseDeep we re-use the reference and change the value where our array references to, because we dont copy the array as a whole including the reference


//if we take a primitive type like f.e. a string or a number as our variable type,
//we can see that we are not changing the initial value if passed as a parameter to the function
let name = "Mario"
changeString(name)
function changeString(nameParameter) {
    nameParameter += ", no Luigi"
}
//here the value is not changed due to the fact that our variable name is a string and therefore a primitive value in the memory
console.log(name)


changeStringDeep()
function changeStringDeep() {
    //if we dont pass the variable and just change it within the scope, it changes as our variable as expected
    name += ", no Luigi"
}
//"Mario, no Luigi"
console.log(name)

//this is also the reason why you can f.e. push to arrays that are declared const, because we dont change the reference or the array as a whole,
//we only change the values where our reference points to
const myArr = ["unpushed"];
myArr.push("pushed")
console.log(myArr)

//the same goes for objects
const myObj = { name: "Mario" }
myObj.name = "Luigi"
console.log(myObj.name)

//BUT this does not work:
//myObj = { name: "Luigi" }
//myArr = ["pusher"]

//types:
//value types: boolean, null, string, undefined, number
//ref. types: Array, Object, Function