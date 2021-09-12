//get the values from the interface
//starts controller function
function getValues() {
//get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
        //parse into integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter intergers");
    }
    //we call generateNumbers
    //we call displayNumbers
}

//generate numbers from the startValue to the endValue
//logic functions
function generateNumbers(sValue, eValue) {
    let numbers = [];
    //we want to get all numbers from start to end
    //for loop
    for (let i = sValue; i <= eValue; i++){
        //this will execute in a loop until i = eValue
        numbers.push(i);
    }
    return numbers;
}
//display numbers and mark even numbers bold 
//display or view function 
function displayNumbers(numbers) {
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        let className = "even";
        if (number % 2 == 0 && number != 0) {
            className = "even";
        } else {
        className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}