//1
let challenge = "30 Days Of JavaScript."

//2
console.log("2: ", challenge);

//3
console.log("3: ", challenge.length);

//4
console.log("4: ", challenge.toUpperCase());

//5
console.log("5: ", challenge.toLowerCase());

//6
console.log("6: ", challenge.substr(0,2));

//7
let indexOfCharD = challenge.indexOf("D");
let indexOfPeriod = challenge.indexOf(".");
console.log("7: ", challenge.substring(indexOfCharD,indexOfPeriod));

//8
console.log("8: ", challenge.includes("Script"));

//9
console.log("9: ", challenge.split());

//10
console.log("10: ", challenge.split(" "));

//11
let itCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log("11: ", itCompanies.split(","));

//12
console.log("12: ", challenge.replace("JavaScript", "Python"));

//13
console.log("13: ", challenge.charAt(15));

//14
let indexOfCharJ = challenge.indexOf("J");
console.log("14: ", challenge.charCodeAt(indexOfCharJ));

//15
console.log("15: ", challenge.indexOf("a"));

//16
console.log("16: ", challenge.lastIndexOf("a"));

//17
let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log("17: ", sentence.indexOf("because"));

//18
console.log("18: ", sentence.lastIndexOf("because"));

//19
console.log("19: ", sentence.search("because"));

//20
let exampleString = " 30 Days Of JavaScript ";
console.log("20: ", exampleString.trim());

//21
console.log("21: ", challenge.startsWith("3"));

//22
console.log("22: ", challenge.endsWith("."));

//23
console.log("23: ", challenge.match(/a/g));

//24
let output;
let input1 = "30 Days of";
let input2 = "JavaScript";

console.log("24: ", input1.concat(input2));


//25
console.log("25: ", challenge.repeat(2));