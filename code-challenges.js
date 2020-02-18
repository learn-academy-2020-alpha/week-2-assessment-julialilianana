// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

const divByThree = (num) => {
    if (num % 3 === 0) {
        return `${num} is divisble by three`
    } else {
        return `${num} is not divisible by three`
    }
}

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

console.log(divByThree(num1))
console.log(divByThree(num2))
console.log(divByThree(num3))



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalized = (array) => {
    let capArr = array.map(value => {
        return value[0].toUpperCase() + value.substring(1)
    })
    return capArr
}
 console.log(capitalized(randomNouns))   



// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const numbersOnly = (array) => {
    let onlyNum = array.filter(value => typeof value === "number")
     return onlyNum.sort(function(a, b){return a-b})
}

console.log(numbersOnly(mixedDataArray))

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.


var vowelTester1 = "learn"
// // Expected output: 1
var vowelTester2 = "throw"
// // Expected output: 3


const indexOfVowel = (str) => {
    let newArr = str.split("")
    for(var i=0; i<newArr.length; i++){
        if( newArr[i] === "a" ||  newArr[i] === "e" ||  newArr[i] === "i" ||  newArr[i] === "o" ||  newArr[i] === "u"){
            var finalAnswer = newArr.indexOf(i)
        } 
    }
    return finalAnswer
   
}

console.log(indexOfVowel(vowelTester1))
console.log(indexOfVowel(vowelTester2))







// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"


const calculator = (number1, operation, number2) => {
    if (operation === "+") {
        return number1 + number2
    } else if (operation === "-"){
        return number1 - number2
    } else if (operation === "*"){
        return number1 * number2
    } else if (operation === "/" && number2 !== 0){
        return number1 / number2
    } else if (operation === "/" && number2 === 0) {
        return "Can't divide by 0!"
    }
}


// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
