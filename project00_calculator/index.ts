#! usr/bin/env node
// SHABANG

import inquirer from 'inquirer'


const askQuestion = async () => {
    const prompt = await inquirer.prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (input: string) => !isNaN(Number(input)) || 'Please enter a valid number',
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter second number',
            validate: (input: string) => !isNaN(Number(input)) || 'Please enter a valid number'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Please choose an operation',
            choices: ['add' , 'subtract', 'multiply', 'divid']
        }
    ])

    return {
        num1: parseFloat(prompt.num1),
        num2: parseFloat(prompt.num2),
        operation: prompt.operation
    }

}

const calculate = (num1: number, num2: number, operation: string) => {
    if (operation === 'add') {
        return num1 + num2
    }
    else if (operation === 'subtract') {
        return num1 - num2
    }
    else if (operation === 'multiply') {
        return num1 * num2
    }
    else if (operation === 'divid') {
        return num1 / num2
    }
    else {
        return console.log("something went wrong!")
    }
}

const answer = async () => {
    try {

        const { num1, num2, operation } = await askQuestion()
        const result = calculate(num1, num2, operation)
        if (result != null || result != undefined) {
            console.log(`The ${operation}ing of ${num1} and ${num2} is ${result}`)
        }
    }
    catch (error) {
        console.log(error)
    }
}

answer()