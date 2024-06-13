var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from 'inquirer';
const askQuestion = () => __awaiter(void 0, void 0, void 0, function* () {
    const prompt = yield inquirer.prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input) => !isNaN(Number(input)) || 'Please enter a valid number',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter second number',
            validate: (input) => !isNaN(Number(input)) || 'Please enter a valid number'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Please choose an operation',
            choices: ['add', 'subtract', 'multiply', 'divid']
        }
    ]);
    return {
        num1: parseFloat(prompt.num1),
        num2: parseFloat(prompt.num2),
        operation: prompt.operation
    };
});
const calculate = (num1, num2, operation) => {
    if (operation === 'add') {
        return num1 + num2;
    }
    else if (operation === 'subtract') {
        return num1 - num2;
    }
    else if (operation === 'multiply') {
        return num1 * num2;
    }
    else if (operation === 'divid') {
        return num1 / num2;
    }
    else {
        return console.log("something went wrong!");
    }
};
const answer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { num1, num2, operation } = yield askQuestion();
        const result = calculate(num1, num2, operation);
        if (result != null || result != undefined) {
            console.log(`The ${operation}ing of ${num1} and ${num2} is ${result}`);
        }
    }
    catch (error) {
        console.log(error);
    }
});
answer();
