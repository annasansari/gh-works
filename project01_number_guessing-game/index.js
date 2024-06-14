import inquirer from "inquirer";
const answer = async () => {
    const askNumber = await inquirer.prompt([
        {
            type: "input",
            name: "num",
            message: "Enter your number",
            validate: (input) => !isNaN(Number(input))
        }
    ]);
    return askNumber.num;
};
let randmNumber = Math.floor(Math.random() * 2);
console.log(randmNumber);
const guessNumber = async () => {
    const userGuess = await answer();
    if (Number(userGuess) === randmNumber) {
        console.log("Congratulation! you guess the right number");
    }
    else {
        console.log("wrong guess! try again");
    }
};
guessNumber();
// import inquirer from "inquirer";
// const answer = async () => {
//     const askNumber = await inquirer.prompt([
//         {
//             type: "input",
//             name: "num",
//             message: "Enter your number",
//             validate: (input: string) => !isNaN(Number(input))
//         }
//     ]);
//     return askNumber.num;
// };
// const randomNumber: number = Math.floor(Math.random() * 10);
// console.log(`Random number (for testing): ${randomNumber}`); // For testing purposes
// const guessNumber = async () => {
//     const userGuess = await answer();
//     if (Number(userGuess) === randomNumber) {
//         console.log("Congratulations! You guessed the right number.");
//     } else {
//         console.log("Wrong guess! Try again.");
//     }
// };
// guessNumber();
