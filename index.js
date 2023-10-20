

// letter grade program
var marks = 80;

if(marks>100 || marks<0){
    console.log("Invalid marks");
}
else if(marks >= 80 && marks <= 100){
    console.log("Your grade is : A+");
}
else if(marks >= 70 && marks <= 79){
    console.log("Your grade is : A");
}
else if(marks >= 60 && marks <= 69){
    console.log("Your grade is : A-");
}
else if(marks >= 50 && marks <= 59){
    console.log("Your grade is : B");
}
else if(marks >= 40 && marks <= 49){
    console.log("Your grade is : C");
}
else if(marks >= 33 && marks <= 39){
    console.log("Your grade is : D");
}
else{
    console.log("Fail");
}

//Find out the largest number among three numbers
var num1 = 10;
var num2 = 20;
var num3 = 30;

if(num1>num2 && num1>num3){
    console.log("Large number is = " + num1);
}
else if(num2>num1 && num2>num3){
    console.log("Large number is = " + num2);
}
else{
    console.log("Large number is = " + num3);
}

//Vowel / Consonant check

var letter = "a";

letter =  letter.toLowerCase();

if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    console.log("This is Vowel :" + letter);
}
else{
    console.log("Consonant");
}


























