//1
let sentenceLove = "Love is the best thing in this world.\
 Some found their love and some are still looking for their love.";

console.log(sentenceLove.match("love"));

//2
let sentenceBecause = "You cannot end a sentence with because because because is a conjunction";
console.log((sentenceBecause.match(/because/g) || []).length);

//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let afterCleanup = sentence.replace(/[^\w\s]/g, "");
console.log(afterCleanup);


let arr = afterCleanup.split(" ");
const map = {};
arr.forEach(word => {
    if(map.hasOwnProperty(word)){
        map[word]++;
    }
    else{
        map[word] = 1;
    }
});
console.log(map);

console.log(Object.keys(map).reduce((a,b) => map[a] > map[b] ? a : b));

//
const salarySentence  = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let arrNum = salarySentence.match(/\d+/g);

console.log(arrNum[0] * 12 + arrNum[1] * 1 + arrNum[2] * 12);
