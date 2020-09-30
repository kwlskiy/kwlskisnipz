const arr = [{ name: "heroku", type: "PaaS" }, { name: "back4app", type: "PaaS" }, { name: "AWS", type: "?" }, { name: "Azure", type: "?" }]
//if you want to utilize arr, try to understand what is the type of arr, what are the types inside arr

//try to think if you want to find multiple or only one? 
//this can impact performance quite significant depending on the size of the array also it makes you more code and its less readable
//in this case we want the first object with "AWS" as name, return type {}
console.log(arr.find(s => s.name === "AWS"))
//now always check the return type of the methods utilized f.e. find returns the type that the array itself holds and only the first value that gets iterated with the predicate being true, if none match its undefined!

//lets say we want to get all PaaS services, return type []
const mySearch1 = arr.filter(s => s.name === "AWS") // [{name: "AWS", type: "?"}]
const mySearch2 = arr.filter(s => s.name === "IamNotThere") // []
//filter always returns an [] even if it does not find anything
//so when working in real world applications with it, it can be the case that nothing will be found so [],
//before accessing elements within the array directly you should check if it contains any:
if (mySearch1.length > 0) { /* do something with the array */ }

//also remember that filter, map and so on support multiple parameters:
console.log(arr.filter((element, index, array) => {
    //index is the current index of the element withing the array
    if (index === 1) console.log(element.name); // prints: "back4app"
    return element.name === "AWS";
})) //prints: [{ name: "AWS", type: "?" }]