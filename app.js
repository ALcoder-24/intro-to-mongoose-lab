import promptSync from 'prompt-sync';

const prompt = promptSync();

const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);