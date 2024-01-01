buttons = document.querySelectorAll("button")
screen = document.querySelector(".screen--show")

numberTracker = []
currentWordHolder = ""
console.log(screen)
buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {

        console.log(`You clicked ${e.target.innerText}`)


        operatorChar = e.target.innerText != "x" && e.target.innerText != "-" && e.target.innerText != "+" && e.target.innerText != "÷"
        lastCharScreenInnerTextOperator =  screen.innerText[-1] != "x" && screen.innerText[-1] != "-" && screen.innerText[-1] != "+" && screen.innerText[-1] != "÷"


        if (e.target.innerText == "AC") {
            screen.innerText = 0
            numberTracker.length = 0
            currentWordHolder = ""
        } else if(e.target.innerText == "=") {
            if (numberTracker.length == 2) {
                numberTracker.push(currentWordHolder)
                console.log("Added currenWordHolder to tracker")
                console.log(`Array is now ${numberTracker} and calculating..`)
                checkSignAndCalculate(numberTracker)
            } else {
                screen.innerText = "ERROR"
            }
        } 
        else {
            if (screen.innerText == 0 && operatorChar) {
                screen.innerText = e.target.innerText   //If The starting is 0, replace it with whatever is clicked
                currentWordHolder = e.target.innerText
            } else if (e.target.innerText == "x" && lastCharScreenInnerTextOperator) {
                if (numberTracker.length == 3) {
                    checkSignAndCalculate(anArray)
                    // result = multiply(numberTracker) 
                } else {
                    console.log("Pushing what is on the screen to array")
                    numberTracker.push(screen.innerText)
                    console.log(numberTracker)
                    console.log("Pushing sign to the array")
                    numberTracker.push("x")
                    console.log(numberTracker)
                    console.log("Setting word holder to empty string")
                    currentWordHolder = ""
                    screen.innerText += e.target.innerText
                }
            } else if (e.target.innerText == "+" && lastCharScreenInnerTextOperator) {
                if (numberTracker.length == 3) {
                    checkSignAndCalculate(anArray)
                    // result = add(numberTracker)
                } else {
                    console.log("Pushing what is on the screen to array")
                    numberTracker.push(screen.innerText)
                    console.log(numberTracker)
                    console.log("Pushing sign to the array")
                    numberTracker.push("+")
                    console.log(numberTracker)
                    console.log("Setting word holder to empty string")
                    currentWordHolder = ""
                    screen.innerText += e.target.innerText
                }
            } else if (e.target.innerText == "÷" && lastCharScreenInnerTextOperator) {
                if (numberTracker.length == 2) {
                    checkSignAndCalculate(anArray)
                    // result = divide(numberTracker)
                } else {
                    console.log("Pushing what is on the screen to array")
                    numberTracker.push(screen.innerText)
                    console.log(numberTracker)
                    console.log("Pushing sign to the array")
                    numberTracker.push("÷")
                    console.log(numberTracker)
                    console.log("Setting word holder to empty string")
                    currentWordHolder = ""
                    screen.innerText += e.target.innerText
                }
            } else if (e.target.innerText == "-" && slastCharScreenInnerTextOperator) {
                if (numberTracker.length == 2) {
                    checkSignAndCalculate(anArray)
                    // result = subtract(numberTracker)
                } else {
                    console.log("Pushing what is on the screen to array")
                    numberTracker.push(screen.innerText)
                    console.log(numberTracker)
                    console.log("Pushing sign to the array")
                    numberTracker.push("-")
                    console.log(numberTracker)
                    console.log("Setting word holder to empty string")
                    currentWordHolder = ""
                    screen.innerText += e.target.innerText
                }
            }
            else {
                screen.innerText += e.target.innerText
                currentWordHolder += e.target.innerText
                console.log(`array is ${numberTracker}`)
                console.log(numberTracker)
                console.log(`current word holder is ${currentWordHolder}`)
            }
        }
    });
})


const add = function (...input) {
    input = input[0]
    // Set InnerText to result
    screen.innerText = Number(input[0]) + Number(input[2])
    console.log(Number(input[0]) + Number(input[2]))
    console.log(input[0]);
    // Clear Number Tracker
    numberTracker.length = 0
    numberTracker = [screen.innerText]
    console.log(screen.innerText)
    return Number(input[0]) + Number(input[2])
};

const subtract = function (...input) {
    input = input[0]
    screen.innerText = Number(input[0]) + Number(input[2])
    console.log(screen.innerText)
    return Number(input[0]) - Number(input[2])
};

const multiply = function (...input) {
    input = input[0]
    screen.innerText = Number(input[0]) * Number(input[2])
    // screen.innerText = 9
    console.log(`first input is ${input[0]}`)
    console.log(screen.innerText)
    return Number(input[0]) * Number(input[2])
};

const divide = function (...input) {
    input = input[0]
    screen.innerText = Number(input[0]) / Number(input[2])
    console.log(screen.innerText)
    return Number(input[0]) / Number(input[2])
}


function checkSignAndCalculate(anArray) {
    if (anArray[1] == "x") {
        console.log("Did multiplication with checkSign x")
        multiply(anArray);
    } else if (anArray[1] == "+") {
        console.log("Did ADDItion with checkSign +")
        add(anArray);
    } else if (anArray[1] == "-") {
        console.log("Did Subtraction with checkSign - ")
        subtract(anArray);
    } else if (anArray[1] == "÷") {
        console.log("Did Subtraction with checkSign ÷")
        divide(anArray);
    }
}

// console.log(checkSignAndCalculate(["52", "x", "7"]))

// console.log(add(["52", "x", "7"]))