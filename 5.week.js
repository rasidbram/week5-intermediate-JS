// 1. Reverse text
// Given a string of characters as input, write a function that returns it with the characters reversed. Don't use reverse function, use loops.

// Example input: reverseText(Hello World!)
// Example output: "!dlroW olleH"

function reverseWord(string){
  var newWord=[];
for (var i=string.length-1; i>=0; i--){
  
newWord+=string[i];

}
return newWord;
}
console.log(reverseWord('Hello World!'));

 // 2. Palindrome checker.
 // A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this. Don't use reverse function, use loops.
 // Example input: isPalindrome('kayak')
 // Example output: true
 // Example input: isPalindrome('name')
 // Example output: false


function palindrome(string){
  var newWord='';
for (var i=string.length-1; i>=0; i--){
newWord+=string[i];

}
if (newWord===string){
return string +' is a palindrome'

} else{
  return string +' is not a palindrome'
}

}

console.log(palindrome('eye'));


// 3. FizzBuzz
// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”. Use for loops.

// Example input: fizzBuzz(11)
// Example output: [1, "Fizz", "Buzz", "Fizz", 5, "Fizz Buzz", 7, "Fizz", "Buzz", "Fizz", 11]

function FizzBuzz(number) {
  var outPut =[];

  for (var i=1; i<=number; i++) {
    
   if (i%3===0 && i%2===0) {

    outPut.push('FizzBuzz');
  }
  else if(i%2===0){

    outPut.push('Fizz');
  }
  else if (i%3===0) {
    
    outPut.push('Buzz');
    
  }else {
    outPut.push(i);

  };
  
}
console.log(outPut);
}
    FizzBuzz(11);


// 4. Reverse Array
// Given an array of items, reverse the order. Don't use reverse function, use loops.

// Example input: reverseArray([22, 'hi', 12])
// Example output: [12, 'hi', 22]

var arr=[22,'hi',12]
var newArr=[];
for (var i=arr.length-1; i>=0; i--){
  console.log(arr[i]);
  newArr.push(arr[i]);
  
}
console.log(newArr);

// 5. Reverse Words
// Given a phrase, reverse the order of the characters of each word. Don't use reverse function, use loops.

// Example input: reverseWords('I love JavaScript!')
// Example output: 'I evol !tpircSavaJ'

var reverseWords='You Love Javascript!'
var arrWords=reverseWords.split(' ');
// console.log(reverseWords.split(' '));

for(var i=0; i<arrWords.length; i++){

var divided=arrWords[i];

// console.log(arrWords[i]);
var lastString='';

for(var k=divided.length-1; k>=0; k--){
    lastString+=divided[k];
// console.log(divided[k]);

}
console.log(lastString);

}



// 6. Capitalization
// Given a phrase, capitalize every word.

// Example input: capitalizeWords('i love javaScript!')
// Example output: 'I Love JavaScript!

var Words='i love javascript'
// console.log(Words.split(' '));

var arr=Words.split(' ')
// console.log(arr);
var lastString='';
for (var i=0; i<arr.length; i++){
// console.log(arr[i].slice(0,1).toUpperCase()+arr[i].slice(1));
var newString=arr[i].slice(0,1).toUpperCase()+arr[i].slice(1)+' ';
// console.log(typeof(newArry));
lastString+=newString;
}
console.log(lastString);


// 7. Subtract two Sets
// Given two arrays that contains integers, remove the integers of second array from the first.

// Example input: subctractArray([1, 2, 4, 6], [2, 6])
// Example output: [1, 4]

var arr1=[1,2,4,6];
var arr2=[2,6];

for (var i=0; i<arr2.length; i++ ){

    console.log(arr1.indexOf(arr2[i]));

    var position=(arr1.indexOf(arr2[i]));

    arr1.splice(position,1);
}
console.log(arr1);


// 1. Find Highest Number inside an array
// Write a function that takes an array returns highest number of the array

var arr=[1,2,3,4,99,5,66,77,'aa']
arr.sort();
// console.log(arr.sort());

 var arr1=[];

for(var i=0; i<arr.length; i++){
    if(typeof(arr[i])===typeof(2)){
        arr1.push(arr[i]);
        
    }
  
}
var highestNumber=arr1.slice(-1)
console.log(highestNumber);


// 2. count words inside a string
// Write a function that takes an and retruns a nmuber of words. ('words leave after space')

// Example input: countWords('Hello World!')
// Example output: "2"

function WordCount(str) { 
    return str.split(' ').length;
  }
  
  console.log(WordCount("Hello world!"));


// 3. find number of the letters
// write a function that takes 2 elements one is a letter the other is an array.

// first convert to array to a string. return numbers of the letters inside the string

// Example input: countLetters('e',['Hello','Worlds!'])
// Example output: "1"

var arr=['hello','world'];
var str='e';
function countLetters(str,arr) {
    for( var i=0; i<str.length; i++){
    var arr1=arr.toString();
    position=arr1.indexOf(str[i]);   
    return position;
    }
    
}
console.log(countLetters(str,arr));