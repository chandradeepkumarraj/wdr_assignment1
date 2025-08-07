/* PART A */

// 1. Greet the User


// let name_u = prompt("What your Name ?");
//  alert("Hello, " + name_u + "!" );


// 2. Simple Calculator  

// let num1 = prompt("Enter the 1st num");
// let num2 = prompt("Enter the 2nd num");
//  num1 = parseInt(num1);
//  num2 = parseInt(num2);
// alert("Sum :"+ (num1+num2) + "\nDifference: "+ (num1-num2) + "\nProduct :" + (num1*num2) + "\nQuotient :" + (num1 / num2));

/* PART B: */

// 3. Age Checker

// let age = prompt("Enter your Age ?");
// age = parseInt(age);
// if (age < 18) {
//     alert("You are a minor");
// }
// else if (age >= 18 && age < 60) {
//     alert("You are an Adult");
// } 
// else {
//     alert("You are a senior citizen");
// }

// 4. Number Guessing Game


// let secret_no = 19;
// let user_response = prompt("Guess the Number!");
// user_response = parseInt(user_response);
// if (user_response < secret_no) {
//     alert(" Too Low");
// }
// else if (user_response > secret_no) {
//     alert(" Too High");
// }
// else if (user_response == secret_no) {
//     alert("Correct guess!");
// }
// else {
//     alert("Invalid !");
// }


/* Part C: Loops */

//5.  Print 1 to 10


// for(let i = 1; i<=10;i++) {
//     alert(i);
// }


// 6.  Multiplication Table


// let user_input = prompt("Enter the number ?");
// user_input = parseInt(user_input);
// for(let i=1;i<=10;i++){
//     alert(user_input + " x " + i + "=" + (user_input*i));
// }


// 7.Sum of Even Numbers


// let sum = 0
// let i = 1
// while (i < 100) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
//     i++;
// }
// alert("Sum of even number between 1 t0 100 is : " + sum);

/* Part D: Arrays & Array Methods */

// 8. Shopping List


// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday'];
// days.push('Saturday');
// days.pop();
// console.log(days);

// 9. Reverse an Array


// let nums = [1,2,3,4,5,6,7,8,9];
// nums.reverse();
// console.log(nums);



// 10. Search in Array


// let colors = ['red','blue','green','pink'];
// let find = prompt("Enter the color");
// if (colors.includes(find)){
//     alert("color " + find + " found in colors array");
// }
// else if (find) {
//     alert(" colors " + find + " not found in array");
// }
// else {
//     alert("Invalid input!");
// }


/* Bonus Challenges */

// 11. FizzBuzz

// for (let i = 1; i <= 30; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//         continue;
//     }
//     else if (i % 3 == 0) {
//         console.log("Fizz");
//         continue;
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }

    // Palindrome Checker : noon , racecar , level

// let word = prompt("Enter a word to check is it Palindrome or not ");
// let word_op = word.split('').reverse().join('');
// if (word === word_op){
//     alert(word + " is a palindrome word");
// }
// else {
//     alert( word + " is not a palindrome word");
// }


/* Mini Projects */

    // Quiz App 


// const questions = [
//   "Q1. What is the capital of India?",
//   "Q2. Which planet is known as the Red Planet?",
//   "Q3. Which is the world Highest Mountain?",
//   "Q4. Which part is known as Brain of computer?",
//   "Q5. Which language is used for web development?"
// ];

// const options = [
//   ["1. Kolkata", "2. Mumbai", "3. New Delhi", "4. Patna"],
//   ["1. Earth", "2. Mars", "3. Jupiter", "4. Venus"],
//   ["1. Kanchan Jangha", "2. Mount Olampus", "3. Mount Everest", "4. K2"],
//   ["1. RAM", "2. Processor", "3. Motherboard", "4. Graphics Card"],
//   ["1. SQL", "2. QBasic", "3. C++", "4. JavaScript"]
// ];
// const correctAnswer = [3,1,3,2,4];
// let score = 0;
// for (let i = 0; i < 5; i++) {
//   let userAnswer = prompt(questions[i] + "\n" + options[i].join('\n') + "\nEnter 1, 2, 3 or 4:");
// userAnswer = parseInt(userAnswer);
//   if (userAnswer == correctAnswer[i]) {
//     score++;
//   }
// }
// alert("Quiz Over! You scored " + score + " out of 5.");


    // 2.  Number Guessing Game
    

// let randomNumber = parseInt(Math.random()*100);
// let guessNumber = 0;
// let noOfAttempts = 0;
// let flag = 0;
// while (flag == 0) {
//     noOfAttempts++;
//     guessNumber = prompt("Guess the correct number between 1 to 100 !!!");
//     guessNumber = parseInt(guessNumber);

//     if (guessNumber == randomNumber) {
//         alert("You Guess the correct Number !!!\nIn " + noOfAttempts + " Attempts." )
//         flag++;
//     }
//     else if (guessNumber > randomNumber){
//         alert("Too High");
//     }
//     else if (guessNumber < randomNumber){
//         alert("Too low");
//     }
//     else {
//         alert("Invalid Input !!");
//     }

// }
