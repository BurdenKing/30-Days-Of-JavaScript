//1
console.log("The quote 'There is no exercise better for the heart than reaching\
 down and lifting people up.' by John Holmes teaches us to help one another.");

//2
console.log("\"Love is not patronizing and charity isn't about pity,\
  it is about love. Charity and love are the same -- with charity you give love,\
   so don't just give money but reach out your hand instead.\"");

//3
console.log(typeof("10") === typeof(10));
console.log(typeof(Number("10")) === typeof(10));

//4
console.log(parseFloat("9.8") == 10);
console.log(Math.round(parseFloat("9.8")) === 10);

//5
console.log("python".includes("on") && "jargon".includes("on"));

//6
let sentence = "I hope this course is not full of jargon."
console.log(sentence.includes("jargon"));

//7
console.log(Math.round(Math.random() * 100));

//8
console.log(Math.round(Math.random() * 50) + 50);

//9
console.log(Math.round(Math.random() * 255));

//10
console.log("JavaScript".charAt(Math.round(Math.random() * 9)));

//11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

//12
let phrase = "You cannot end a sentence with because because because is a conjunction";
let firstIndex = phrase.indexOf("because");
let lastIndex = phrase.lastIndexOf("because");
let stringLength = lastIndex - firstIndex + 7;

console.log(phrase.substr(firstIndex, stringLength));

