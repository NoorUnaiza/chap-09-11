// 1.

var city = prompt("Enter a City Name");
if(city == "Karachi"){
    alert("Welcome to City of Lights");
}
else{
    alert(`Welcome to ${city}`);
}


// 2.

var gender = prompt("What is your Gender?");
if (gender == "Male" || gender ==  "male" || gender ==  "m") {
    alert("Good Morning Sir.");
}
else if (gender == "Female" || gender ==  "female" || gender ==  "f") {
    alert("Good Morning Ma'am.");
}   

// 3.

var color = prompt("Write colors for road traffic signals.");
if(color == "RED" || color == "Red" || color == "red") {
    alert("Must Stop");
}
else if(color == "YELLOW" || color == "Yellow" || color == "yellow")
{
    alert("Ready to move");
}
else if(color == "GREEN" || color == "Green" || color == "green")
{
    alert("Move now");
}
else{
    alert("Please enter a right of traffic road signals");
}

// 4. 

var fuel = prompt("How much fuel is left in the car? (in litres)");
if(fuel < 0.25){
    alert("Please refill the fuel in your car.");
}
else{
    alert("You have enough fuel in your car.");
}


// 5. 
var a = 4;
if (++a === 5) { alert("given condition for variable a is true"); }
// Displayed  alert var a

var b = 82;
if (b++ === 83) { alert("given condition for variable b is true"); }
//  not displayed alert var b

var c = 12;
if (c++ === 13) { alert("condition 1 is true"); }
//  not displayed 

if (c === 13) { alert("condition 2 is true"); }
//    displayed

if (++c < 14) { alert("condition 3 is true"); }
// not displayed 

if (c === 14) { alert("condition 4 is true"); }
// displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
//   displayed 

if (true) { alert("True"); }
//  displayed 

if (false) { alert("False"); }
//  not displayed 

if ("car" < "cat") { alert("car is smaller than cat"); }
//  not displayed 



// 6.

var subject1 = parseInt(prompt("Enter your marks for Subject 1:"));
var subject2 = parseInt(prompt("Enter your marks for Subject 2:"));
var subject3 = parseInt(prompt("Enter your marks for Subject 3:"));
var totalMarks = parseInt(prompt("Enter your Total Marks"));

var obtainedMArks = subject1 + subject2 + subject3;
var percentage = Math.round((obtainedMArks / totalMarks) * 100);

if (percentage >= 80) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>`
       + `Marks obtained : ${obtainedMArks} </br>`
       + `Percecntage : ${percentage}% </br>`
       + `Grade : A-one` + `</br>`
       + `Remarks : Excellent </br>`
    )

}
else if (percentage >= 70) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>`
       + `Marks obtained : ${obtainedMArks} </br>`
       + `Percecntage : ${percentage}% </br>`
       + `Grade : A` + `</br>`
       + `Remarks : Good </br>`
    );

}
else if (percentage >= 60) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>`
       + `Marks obtained : ${obtainedMArks} </br>`
       + `Percecntage : ${percentage}% </br>`
       + `Grade : B` + `</br>`
       + `Remarks : You need to improve </br>`
    );

}
else{(percentage < 60) 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
          document(
        `Total marks : ${totalMarks} </br>`
       + `Marks obtained : ${obtainedMArks} </br>`
       + `Percecntage : ${percentage}% </br>`
       + `Grade : Fail` + `</br>`
       + `Remarks : Sorry </br>`
    );
}

// 7. 

var number = prompt("To guess and enter the secret number.");
if(number == 4)
 {
        alert("Bingo! Correct answer");
    }
    else if(number == 1 || number == 2 || number == 3 || number == 5 || number == 6 || number == 7 || number == 8 || number == 9 || number == 10)
         {
        alert("Close enough to the correct answer");
    }
    else if(number == 0) {
        alert("Invalid Guess");
    }
    else {
        alert("Invalid Guess");
    }

// 8.
var number = parseInt(prompt(" check whether the given number is divisible by 3"));
var devisible = number % 3;
if(devisible === 0){
    alert("It number divisible by 3");
}
else{
    alert("not divisible");
}

// 9.

var number = parseInt(prompt("Please enter a number:"));
var evenNumber = number % 2;
if(evenNumber === 0){
    alert("The number is even.");
}
else{
    alert("The number is odd.");
}

// 10.

var temperature = parseInt(prompt("Please enter the temperature in degrees Celsius:"));
if(temperature >= 40){
    alert("It is too hot outside.");
}
else if(temperature >=30){
    alert("The Weather today is Normal.");
}
else if(temperature >=20){
    alert("Today’s Weather is cool.");
}
else if(temperature >=10){
    alert("OMG! Today’s weather is so Cool.");
}
else {
    alert("It's quite cold today.");
}

// 11
var firstNumber = parseInt(prompt("Enter the first number:"));
var secondNumber = parseInt(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if(operation === '+'){
    result = firstNumber + secondNumber;
}
else if(operation === '-'){
    result = firstNumber - secondNumber;
}
else if(operation === '*'){
    result = firstNumber * secondNumber;
}
else if(operation === '/'){
    result = firstNumber / secondNumber;
}
else if(operation === '%'){
    result = firstNumber % secondNumber;
}
else{
    alert("Invalid!")
}
if (result !== undefined) {
    alert("The result is: " + result);
}