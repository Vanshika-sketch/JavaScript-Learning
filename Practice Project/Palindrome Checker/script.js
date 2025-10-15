let word = prompt("Enter a word to check if it's a palindrome : ");
//convert to lowercase and remove spaces
let cleanedWord = word.toLowerCase().replace(/\s/g,"");
// Reverse the string
let reversedWord = cleanedWord.split("").reverse().join("");

if(cleanedWord === reversedWord){
    alert(`${word} is a Palindrome`);
} else{
    alert(`${word} is not a palindrome`)
}
