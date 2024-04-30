import inquirer from 'inquirer';

const answer: {
    Sentence: "string"
} = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Please enter sentence or paragraph we count word: "
})

const word = answer.Sentence.trim().split("")
console.log(`Your Sentence word count is ${word.length}`);
